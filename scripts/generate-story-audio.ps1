$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$projectRoot = Split-Path -Parent $PSScriptRoot
$audioRoot = Join-Path $projectRoot 'public\audio\story'
New-Item -ItemType Directory -Force -Path $audioRoot | Out-Null
$storyData = Get-Content -LiteralPath (Join-Path $projectRoot 'src\data\storyScenes.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$narrator = New-Object System.Speech.Synthesis.SpeechSynthesizer
$koreanVoice = $narrator.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Culture.Name -eq 'ko-KR' -and $_.Enabled } | Select-Object -First 1
if (-not $koreanVoice) { throw 'A Korean Windows TTS voice is required to rebuild narration.' }
$narrator.SelectVoice($koreanVoice.VoiceInfo.Name)
$narrator.Rate = -1
$narrator.Volume = 100
$format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
$clips = @{}
try {
  foreach ($chapter in $storyData) {
    foreach ($part in @('intro','outro')) {
      foreach ($scene in $chapter.$part) {
        $clipPath = Join-Path $audioRoot ($scene.id + '.wav')
        $narrator.SetOutputToWaveFile($clipPath, $format)
        $narrator.Speak([string]$scene.caption)
        $narrator.SetOutputToNull()
        $clips[$scene.id] = @{ file=('/audio/story/' + $scene.id + '.wav'); text=[string]$scene.caption }
      }
    }
    Write-Output ('Narration chapter ' + $chapter.chapter + ' / 20')
  }
  @{ voice=$koreanVoice.VoiceInfo.Name; language='ko-KR'; sampleRate=22050; clips=$clips } | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $audioRoot 'manifest.json') -Encoding UTF8
} finally { $narrator.Dispose() }

# Include the prologue and all mid-chapter scenes in a complete audio rebuild.
& (Join-Path $PSScriptRoot 'generate-journey-audio.ps1')

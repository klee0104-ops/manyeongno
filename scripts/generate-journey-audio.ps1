$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$projectRoot = Split-Path -Parent $PSScriptRoot
$audioRoot = Join-Path $projectRoot 'public\audio\story'
$data = Get-Content -LiteralPath (Join-Path $projectRoot 'src\data\journeyScenes.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$manifestPath = Join-Path $audioRoot 'manifest.json'
$manifest = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$narrator = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice = $narrator.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Culture.Name -eq 'ko-KR' -and $_.Enabled } | Select-Object -First 1
if (-not $voice) { throw 'A Korean Windows TTS voice is required.' }
$narrator.SelectVoice($voice.VoiceInfo.Name)
$narrator.Rate = -1
$format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
$shots = @($data.prologue)
foreach ($chapter in $data.chapters) { foreach ($part in @('mid5','mid10','mid15')) { $shots += $chapter.$part } }
try {
 foreach ($shot in $shots) {
  $narrator.SetOutputToWaveFile((Join-Path $audioRoot ($shot.id + '.wav')), $format)
  $narrator.Speak([string]$shot.caption)
  $narrator.SetOutputToNull()
  $manifest.clips | Add-Member -NotePropertyName $shot.id -NotePropertyValue @{ file=('/audio/story/' + $shot.id + '.wav'); text=[string]$shot.caption } -Force
 }
 $manifest | ConvertTo-Json -Depth 7 | Set-Content -LiteralPath $manifestPath -Encoding UTF8
 Write-Output ('Created ' + $shots.Count + ' voiced journey scenes.')
} finally { $narrator.Dispose() }

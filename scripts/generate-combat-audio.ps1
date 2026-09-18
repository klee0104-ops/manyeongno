$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$projectRoot = Split-Path -Parent $PSScriptRoot
$audioRoot = Join-Path $projectRoot 'public\audio\combat'
$lines = Get-Content -LiteralPath (Join-Path $audioRoot 'lines.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$narrator = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice = $narrator.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Culture.Name -eq 'ko-KR' -and $_.Enabled } | Select-Object -First 1
if (-not $voice) { throw 'A Korean Windows TTS voice is required.' }
try {
 $narrator.SelectVoice($voice.VoiceInfo.Name)
 $format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
 foreach ($line in $lines) {
  $narrator.Rate=[int]$line.rate
  $narrator.SetOutputToWaveFile((Join-Path $audioRoot $line.file),$format)
  $narrator.Speak([string]$line.text)
  $narrator.SetOutputToNull()
 }
 Write-Output ($lines.Count.ToString() + ' Korean combat callouts generated.')
} finally { $narrator.Dispose() }

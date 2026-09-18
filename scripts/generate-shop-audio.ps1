$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$projectRoot = Split-Path -Parent $PSScriptRoot
$audioRoot = Join-Path $projectRoot 'public\audio\shop'
New-Item -ItemType Directory -Force -Path $audioRoot | Out-Null
$lines = @{
 welcome='어서 오너라, 먼 길 오느라 고생했지. 무엇이 필요하니?'
 summon='새로운 인연을 찾으러 왔구나. 마음을 담아 부적을 골라 보렴.'
 general='여행길에는 준비가 제일이지. 약차도 있고, 요괴를 키울 재료도 있단다.'
 purchase='여기 있단다. 네 여정에 도움이 되었으면 좋겠구나.'
 back='천천히 둘러보렴. 나는 여기 있을 테니.'
}
$voice = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
 $voice.SelectVoice('Microsoft Heami Desktop')
 $voice.Rate=-2
 $format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
 foreach($line in $lines.GetEnumerator()){
  $voice.SetOutputToWaveFile((Join-Path $audioRoot ($line.Key+'.wav')),$format)
  $voice.Speak($line.Value)
  $voice.SetOutputToNull()
 }
 $lines | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $audioRoot 'lines.json') -Encoding UTF8
 Write-Output '5 shopkeeper voice clips generated.'
}finally{$voice.Dispose()}

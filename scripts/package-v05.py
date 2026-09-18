"""Package the playable build and source; exclude dev profiles and previous archives."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root=Path(__file__).resolve().parent.parent
out=root/'outputs/만령로_달빛서고의이야기_v0.5.0.zip'
files=[]
for folder in ['dist','public','src','tests','docs']:
    files.extend(p for p in (root/folder).rglob('*') if p.is_file())
for name in ['package.json','package-lock.json','tsconfig.json','vite.config.ts','index.html','README.md','게임 실행.cmd','.eslintrc.cjs','.gitignore','manyeongno_기획총정리.pdf','scripts/serve.mjs','scripts/create-story-scenes.py','scripts/generate-story-audio.ps1','scripts/verify-story-assets.mjs','scripts/package-v05.py']:
    files.append(root/name)
out.parent.mkdir(exist_ok=True)
with ZipFile(out,'w',ZIP_DEFLATED,compresslevel=6) as archive:
    for p in files:
        archive.write(p,'manyeongno-v0.5.0/'+p.relative_to(root).as_posix())
with ZipFile(out) as archive:
    assert archive.testzip() is None
    assert sum('/dist/audio/story/' in p and p.endswith('.wav') for p in archive.namelist())==120
print(f'{out}\n{len(files)} files / {out.stat().st_size/1e6:.1f} MB / verified')

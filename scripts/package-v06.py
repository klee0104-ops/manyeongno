"""Bundle the playable build, assets, source and documentation for v0.6."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root=Path(__file__).resolve().parent.parent
out=root/'outputs/만령로_살아나는인연_v0.6.0.zip'
files=[]
for folder in ['dist','public','src','tests','docs']:
    files.extend(p for p in (root/folder).rglob('*') if p.is_file())
for name in ['package.json','package-lock.json','tsconfig.json','vite.config.ts','index.html','README.md','게임 실행.cmd','.eslintrc.cjs','.gitignore','manyeongno_기획총정리.pdf','scripts/serve.mjs','scripts/create-story-scenes.py','scripts/generate-story-audio.ps1','scripts/generate-shop-audio.ps1','scripts/verify-story-assets.mjs','scripts/verify-shop-assets.mjs','scripts/package-v06.py']:
    files.append(root/name)
out.parent.mkdir(exist_ok=True)
with ZipFile(out,'w',ZIP_DEFLATED,compresslevel=6) as archive:
    for path in files:
        archive.write(path,'manyeongno-v0.6.0/'+path.relative_to(root).as_posix())
with ZipFile(out) as archive:
    assert archive.testzip() is None
    names=archive.namelist()
    assert sum('/dist/audio/story/' in n and n.endswith('.wav') for n in names)==120
    assert sum('/dist/audio/shop/' in n and n.endswith('.wav') for n in names)==5
    assert any(n.endswith('/dist/art/granny-poses-v06.png') for n in names)
    assert not any('/tmp/' in n or '/node_modules/' in n for n in names)
print(f'{out}\n{len(files)} files / {out.stat().st_size/1e6:.1f} MB / verified')

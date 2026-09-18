import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.env.MANYEONGNO_PORT || 5173);
const host = '127.0.0.1';
const url = `http://${host}:${port}/`;
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.wav': 'audio/wav', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' };
const open = () => { if (process.argv.includes('--open') && process.platform === 'win32') spawn('cmd.exe', ['/c', 'start', '', url], { windowsHide: true, stdio: 'ignore' }).unref(); };
try { await stat(resolve(root, 'index.html')); } catch { console.error('Build missing. Run npm run build first.'); process.exit(1); }
const server = http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, url).pathname);
    const file = resolve(root, pathname === '/' ? 'index.html' : `.${pathname}`);
    if (!file.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    const content = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.on('error', async e => {
  if (e.code === 'EADDRINUSE') {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(2500) });
      if ((await response.text()).includes('달빛 아래 이어지는 요괴와의 인연.')) {
        console.log(`Manyeongno is already running: ${url}`);
        open();
        return;
      }
    } catch { /* An unrelated service must not be stopped or replaced. */ }
    console.log(`Port ${port} is in use. If Manyeongno is already running, open ${url}`);
    console.log('To use a different port: set MANYEONGNO_PORT=5191');
  } else console.error(e);
  process.exitCode = 1;
});
server.listen(port, host, () => { console.log(`Manyeongno is ready: ${url}\nKeep this window open while playing. Ctrl+C to stop.`); open(); });

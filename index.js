'use strict';
const http = require('http');
// サーバーを作成
const server = http.createServer((req, res) => {
  // 情報のログとエラーログをコンソールに出力
  console.info(`[${new Date()}] Requested by ${req.connection.remoteAddress}`);
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write(req.headers['user-agent']);
  res.end();
}).on('error', (e) => {
  console.error(`[${new Date()}] Server Error`, e);
}).on('clientError', (e) => {
  console.error(`[${new Date()}] Client Error`, e);
});

const port = 8000;

// HTTPサーバーを起動
server.listen(port, () => {
  console.info(`[${new Date()}] ポート ${port} 番でサーバーを起動しました`);
});
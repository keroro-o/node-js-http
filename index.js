'use strict';
const http = require('http');
// サーバーを作成
const server = http.createServer((req, res) => {
  // 情報のログとエラーログをコンソールに出力
  const now = new Date();
  console.info(`[${now}] Requested by ${req.connection.remoteAddress}`);
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  switch (req.method) {
    case 'GET':
      const fs = require('fs');
      const rs = fs.createReadStream('./form.html');
      rs.pipe(res);
      break;
    case 'POST':
      let rawData = '';
      req.on('data', (chunk) => {
        rawData = rawData + chunk;
      }).on('end', () => {
        const decoded = decodeURIComponent(rawData);  // URLエンコードされた値を元のものに直し変数に代入
        console.info(`[${now}] 投稿： ${decoded}`);
        res.write(`<!DOCTYPE html><html lang="ja"><body><h1>${decoded} が投稿されました</h1></body></html>`);
        res.end();
      });
      break;
    case 'DELETE':
      res.write(`DELETE ${req.url}`);
      break;
    default:
      break;
  }

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
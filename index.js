'use strict';
const http = require('http');
// サーバーを作成
const server = http.createServer((req, res) => {
  // HTTPレスポンスヘッダを書き込む
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  // HTTPレスポンスの内容（本文）を書きだす
  res.write(req.headers['user-agent']);
  // レスポンスの書き出しを終了
  res.end();
});
const port = 8000;

// HTTPサーバーを起動
server.listen(port, () => {
  console.log(`ポート ${port} 番でサーバーを起動しました`);
});
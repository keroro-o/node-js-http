'use strict';
const http = require('http');
// サーバーを作成
const server = http.createServer((req, res) => {
  // HTTPレスポンスヘッダを書き込む
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  // HTTPレスポンスの内容（本文）を書きだす
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');
  // レスポンスの書き出しを終了
  res.end();
});
const port = 8000;

// HTTPサーバーを起動
server.listen(port, () => {
  console.log(`ポート ${port} 番でサーバーを起動しました`);
});
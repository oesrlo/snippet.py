const WebSocket = require('ws');
const http = require('http');
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

app.get('', (req, res) => {
    res.sendFile(__dirname + '/Home.html')
})

// Express 애플리케이션을 HTTP 서버와 연결합니다.
const server = http.createServer(app);

// WebSocket 서버를 생성하고 HTTP 서버와 연결합니다.
const wss = new WebSocket.Server({ server });

// 클라이언트가 연결될 때 발생하는 이벤트 핸들러를 정의합니다.
wss.on('connection', (ws) => {
  // 클라이언트로 메시지를 보내는 예제
  ws.send('서버에 연결되었습니다.');

  // 클라이언트로부터 메시지를 받았을 때 발생하는 이벤트 핸들러
  ws.on('message', (message) => {
    console.log(`받은 메시지: ${message}`);
   
    // 클라이언트에게 메시지를 다시 전송
    ws.send(`서버에서 받은 메시지: ${message}`);
  });
});

// 서버를 시작합니다.
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
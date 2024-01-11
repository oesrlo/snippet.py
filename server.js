const WebSocket = require('ws');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('', (req, res) => {
    res.sendFile(__dirname + '/client1.html')
})

const clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);

  ws.on('message', (message) => {
    console.log(`받은 메시지: ${message}`);
    const receiveTime = process.hrtime.bigint();
    // 클라이언트에게 받은 메시지를 전송
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        // client.send(`서버에서 받은 메시지: ${message}`);
        const sendTime = process.hrtime.bigint();
        const latency = (sendTime - receiveTime) / BigInt(1000); 
        client.send(`받은 메시지: ${message}, 지연 시간: ${latency}µs`);
        console.log(`서버에서 받은 응답: ${message}, 전송부터 수신까지의 지연 시간:  ${latency}µs`);
      }
    });
  });

  ws.on('close', () => {
    // 클라이언트 배열에서 해당 클라이언트를 제거
    clients.splice(clients.indexOf(ws), 1);
  });
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
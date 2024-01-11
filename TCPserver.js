const net = require('net');

const server = net.createServer((socket) => {
  console.log('클라이언트가 연결되었습니다.');

  socket.on('data', (data) => {
    const receiveTime = process.hrtime.bigint();
    const message = data.toString();

    // 클라이언트에게 받은 메시지를 전송
    socket.write(`서버에서 받은 메시지: ${message}`);

    const sendTime = process.hrtime.bigint();
    const latency = (sendTime - receiveTime) / BigInt(1000); // 나노초를 마이크로초로 변환

    console.log(`클라이언트에서 받은 메시지: ${message}, 지연 시간: ${latency}µs`);
  });

  socket.on('end', () => {
    console.log('클라이언트와의 연결이 종료되었습니다.');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`서버가 127.0.0.1:${PORT} 에서 실행 중입니다.`);
});
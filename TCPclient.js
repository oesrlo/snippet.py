const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', () => {
  console.log('서버에 연결되었습니다.');

  // 클라이언트에서 메시지를 전송
  const sendTime = process.hrtime.bigint();
  client.write('안녕하세요, 서버!');

  client.on('data', (data) => {
    const receiveTime = process.hrtime.bigint();
    const message = data.toString();

    console.log(`서버에서 받은 응답: ${message}, 전송부터 수신까지의 지연 시간: ${(receiveTime - sendTime) / BigInt(1000)}µs`);

    // 연결 종료
    client.end();
  });

  client.on('end', () => {
    console.log('서버와의 연결이 종료되었습니다.');
  });
});
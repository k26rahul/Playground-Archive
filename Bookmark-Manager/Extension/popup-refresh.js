// const log = console.log.bind(console, 'popup-refresh.js:');
const log = () => {};

const PORT = 2424;
const socket = new WebSocket('ws://localhost:' + PORT);

socket.addEventListener('open', event => {
  log('websocket connection opened');
});

socket.addEventListener('message', event => {
  let data = JSON.parse(event.data);
  log('received message:', data);
  if (data.event === 'change') {
    location.reload();
  }
});

socket.addEventListener('close', event => {
  log('websocket connection closed');
});

socket.addEventListener('error', event => {
  console.error('websocket error', event);
});

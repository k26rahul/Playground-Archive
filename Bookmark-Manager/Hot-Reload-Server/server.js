import { watch } from 'chokidar';
import { WebSocketServer } from 'ws';

clearConsole();

const extensionDir = String.raw`C:\k26rahul\Code\Projects\Bookmark-Manager\Extension`;
const watcher = watch(extensionDir, {
  persistent: true,
  ignoreInitial: true,
});

watcher.on('all', (event, path) => {
  console.log(`chokidar: ${event}: ${path}`);

  wsServer.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(JSON.stringify({ event, path }));
    }
  });
});

const PORT = 2424;
const wsServer = new WebSocketServer({ port: PORT });
console.log(`started websocket server on port: ${PORT}`);

wsServer.on('connection', function onConnection(client) {
  console.log(`client connected`);
  client.on('error', console.error);

  client.on('message', function message(data) {
    console.log(`received from client: ${data}`);
  });

  client.on('close', function close() {
    console.log('client disconnected');
  });

  client.send(JSON.stringify({ message: 'hello from server' }));
});

export function clearConsole() {
  process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc');
}

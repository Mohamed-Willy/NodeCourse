const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Detect events
myEmitter.on('newSale', () => {
  console.log('New Sale Detected');
});

myEmitter.on('newSale', (name) => {
  console.log(`New Sale Detected By: ${name}`);
});

// Emit events
myEmitter.emit('newSale', 'Willy');

////////////////////////////////////////////

// Create Server
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('New Request Received');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on port 3000');
});

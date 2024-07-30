const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //Solution 1
  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) {
  //       res.writeHead(404, { 'Content-type': 'text/html' });
  //       return res.end('<h1>404 Not Found</h1>');
  //     }
  //     res.end(data);
  //   });
  //
  // Solution 2
  //   const readable = fs.createReadStream('test-file.txt');
  //   readable.on('data', (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });
  //   readable.on('error', (err) => {
  //     res.statusCode = 500;
  //     res.end('<h1>500 Internal Server Error</h1>');
  //
  // Solution 3
  //   const readable = fs.createReadStream('test-file.txt');
  //   readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running on port 8000');
});

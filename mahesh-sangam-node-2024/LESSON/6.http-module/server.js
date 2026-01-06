const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Received request for ${req}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\nI am learngin Node.js HTTP module. \n');
})

const port = 4000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
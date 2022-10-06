const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end("Hello World!!! So excited to be using WSL!");
});
server.listen(3000);

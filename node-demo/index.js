const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Halo Wenda!</h1><p>Ini hasil Node.js dari WSL yang tampil di Browser.</p>');
});

server.listen(3000, () => {
  console.log('Server nyala! Buka http://localhost:3000 di browser kamu.');
});

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our homepage');
  }

  if (req.url === '/about') {
    res.end('About us');
  }

  res.end(`
    <h1>Oops... this page doesn't exist</h1>
  `);
});

server.listen(5000);

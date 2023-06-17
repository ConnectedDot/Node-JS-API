const http = require('http');
const todos = [
  { id: 1, name: 'Todo One' },
  { id: 2, name: 'Todo Two' },
  { id: 3, name: 'Todo Three' },
  { id: 4, name: 'Todo Four' },
  { id: 5, name: 'Todo Five' },
];
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  let body = [];

  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      success: true,
      error: 'Server returned - check mail',
      data: todos,
    })
  );
});

const PORT = 8000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

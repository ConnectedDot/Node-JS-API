const http = require('http');
const todos = [
  { id: 1, name: 'Todo One' },
  { id: 2, name: 'Todo Two' },
  { id: 3, name: 'Todo Three' },
  { id: 4, name: 'Todo Four' },
  { id: 5, name: 'Todo Five' },
];
const server = http.createServer((req, res) => {
  res.writeHead(404, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  }),
    res.end(
      JSON.stringify({
        success: false,
        error: 'Server returned - check mail',
        data: null,
      })
    );
});

const PORT = 8000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

const http = require('http');
const todos = [
  { id: 1, name: 'Todo One' },
  { id: 2, name: 'Todo Two' },
  { id: 3, name: 'Todo Three' },
  { id: 4, name: 'Todo Four' },
  { id: 5, name: 'Todo Five' },
];
const server = http.createServer((req, res) => {
  const { method, url } = req;
  let body = [];

  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();

      let status = 404;
      const response = {
        success: false,
        data: null,
      };
      if (method === 'GET' && url === '/todos') {
        status = 200;
        response.success = true;
        response.data = todos;
      } else if (method === 'POST' && url === '/todos') {
        const { id, text } = JSON.parse(body);

        if (!id || !text) {
          status = 400;
          response.error = 'Invalid inputs';
        } else {
          todos.push({ id, text });
          (status = 201), (response.success = true);
          response.data = todos;
        }
      }

      res.writeHead(status, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
      });

      res.end(JSON.stringify(response));
    });
});

const PORT = 8000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

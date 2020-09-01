const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Now serving on http://localhost:3000 with Express');
  });
});

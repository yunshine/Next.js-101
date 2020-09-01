const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/post/:id', (req, res) => {
    // req.params.id;
    app.render(req, res, '/post', { id: req.params.id });
  });

  server.get('/lol', (req, res) => {
    res.send("YOU'VE HIT LOL");
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Now serving on http://localhost:3000 with Express');
  });
});

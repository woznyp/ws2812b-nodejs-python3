const express = require('express');
const server = express();
const spawn = require('child_process').spawn;
const port = 80;

let proc;

server.use(express.static('static'));

server.get('/set', (req, res) => {
  proc = spawn('python3', [
    '../core/led-strip.py',
    req.query.br,
    req.query.r,
    req.query.g,
    req.query.b,
  ]);
  res.send(200);
});
server.listen(80);

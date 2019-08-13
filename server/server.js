import express from 'express';
const app = express(),
  port = 8083;

app.get('/', (req, res) => {
  res.send('es6 express ok!');
});

app.listen(port, () => {
  console.log('server start at port ' + port);
});
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from ES6!');
});

app.listen(4200, () => {
  console.log('Server listening on port 4200');
});

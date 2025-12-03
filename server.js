import express from 'express';

const app = express();
const port  = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Personal Blog API is running at http://localhost:${port}`);
});
import express from 'express';
import { createPost } from './service/create.js';
import { readAllPost } from './service/readAll.js';
import { readByIdPost } from './service/readById.js';
import { updatePost } from './service/update.js';
import { deletePost } from './service/delete.js';

const app = express();
app.use(express.json());
const port  = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Personal Blog API is running');
});

app.post('/articles', (req, res) => {
  createPost(req, res);
});

app.get('/articles', (req, res) => {
  readAllPost(req, res);
});

app.get('/articles/:id', (req, res) => {
  readByIdPost(req, res);
});

app.put('/articles/:id', (req, res) => {
  updatePost(req, res);
});

app.delete('/articles/:id', (req, res) => {
  deletePost(req, res);
});

app.listen(port, () => {
  console.log(`Personal Blog API is running at http://localhost:${port}`);
});
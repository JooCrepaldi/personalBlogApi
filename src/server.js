import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  functions.readPosts(req, res);
});

app.get('/home/article/{id}', (req, res) => {
  functions.readByIdPost(req, res);
});

//admin only route  

app.get('/admin', auth, (req, res) => {
  functions.readPosts(req, res);
});

app.get('/admin/edit/{id}', auth, (req, res) => {
  functions.readByIdPost(req, res);
});

app.delete('/admin/delete/{id}', auth, (req, res) => {
  functions.deletePost(req, res);
});

app.put('/admin/edit/{id}', auth, (req, res) => {
  functions.updatePost(req, res);
});

app.post('/admin/new', auth, (req, res) => {
  functions.createPost(req, res);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
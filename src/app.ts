import express from 'express';

const app = express();
const port = 3000;

const a = 3;

app.get('/', (req, res) => {
  res.send(a);
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

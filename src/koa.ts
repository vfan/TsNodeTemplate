// const Koa = require('koa');
import Koad from 'koa';

const app = new Koad();

app.use(async (ctx) => {
  ctx.body = 'Hello World 3';
});

app.listen(3002);
console.log('start server');

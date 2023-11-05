import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import render from './entry'
const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(serve("./public")); // 这里root为package.json所在目录

router.get('(.*)', render);

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log(`server start at 3000 port`)
})

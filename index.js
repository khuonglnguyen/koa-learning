const Koa = require("koa");
const parser = require("koa-bodyparser");
const { koaBody } = require("koa-body");
const cors = require("@koa/cors");
const router = require("./router");
const App = new Koa();
const port = 6969;

App.use(parser())
  .use(koaBody({ multipart: true }))
  .use(cors())
  .use(router.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });

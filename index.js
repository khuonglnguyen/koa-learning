const Koa = require("koa");
const ratelimit = require("koa-ratelimit");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router");
const App = new Koa();
const port = 6969;

// apply rate limit
const db = new Map();

App.use(
  ratelimit({
    driver: "memory",
    db: db,
    duration: 60000,
    errorMessage: "Sometimes You Just Have to Slow Down.",
    id: (ctx) => ctx.ip,
    headers: {
      remaining: "Rate-Limit-Remaining",
      reset: "Rate-Limit-Reset",
      total: "Rate-Limit-Total",
    },
    max: 100,
    disableHeader: false,
    whitelist: (ctx) => {
      console.log(ctx);
      // some logic that returns a boolean
    },
    blacklist: (ctx) => {
      // some logic that returns a boolean
    },
  })
)
  .use(parser())
  .use(cors())
  .use(router.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });

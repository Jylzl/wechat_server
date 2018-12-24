const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser());
// json pretty
app.use(json());

// 引入users.js
const user = require('./routes/api/user');

// 配置路由地址localhost:5000/api/users
router.use('/api/user', user);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("server is running port is 3000");
});

const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");

const serverconfig = require("./config/server.config.js");


const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser());
// json pretty
app.use(json());

// 引入users.js
const index = require("./routes/api/index");

// 配置路由地址localhost:5000/api/users
router.use("/", index);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(serverconfig.port, () => {
  console.log("server is running port is " + serverconfig.port);
});

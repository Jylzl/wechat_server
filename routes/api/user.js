const Router = require("koa-router");
const router = new Router();

/**
 * @route GET api/user/register
 * @desc  测试接口地址
 * @access 接口是公开的
 */
router.post("/register", ctx => {
  console.log(ctx.request.body);
  ctx.status = 500;
  ctx.body = {
    email: "邮箱被占用"
  };
});

module.exports = router.routes();

const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();

var wechat = require("wechat");
var wechatAPI = require("wechat-api");
const config = require("../../config/wechat.config.js");

//创建wechat-api
var api = new wechatAPI(config.appID, config.appSecret);

var menu = {
  button: [
    {
      type: "click",
      name: "孝感新闻",
      key: "V1001_GOOD"
    },
    {
      name: "网上互动",
      sub_button: [
        {
          type: "view",
          name: "问卷调查",
          url: "https://www.baidu.com/"
        },
        {
          type: "click",
          name: "赞一赞",
          key: "V1001_GOOD"
        },
        {
          name: "发送位置",
          type: "location_select",
          key: "rselfmenu_2_0"
        }
      ]
    },
    {
      name: "政民互动",
      sub_button: [
        {
          type: "view",
          name: "百度",
          url: "https://www.baidu.com/"
        },
        {
          type: "click",
          name: "赞一赞",
          key: "V1001_GOOD"
        },
        {
          name: "发送位置",
          type: "location_select",
          key: "rselfmenu_2_0"
        }
      ]
    }
  ]
};
//删除菜单
api.removeMenu(function(err, result) {
  if (err) {
    console.log("error", err);
  }
  console.log("info", "remove menu success");
});

//创建菜单
api.createMenu(menu, function(err, result) {
  if (err) {
    console.log("error", err);
  }
  console.log("info", "create menu success");
});

module.exports = router.routes();

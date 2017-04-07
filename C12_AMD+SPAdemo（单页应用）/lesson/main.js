require.config({
    paths : {
        jquery : "lib/jquery",
        // 解析 html 内容的库
        text : "lib/text",
        // 解析 css 内容的库
        // 注意：这个名字前面我们要加一个 $，如果不加，以后代码压缩会有问题
        $css : "lib/css",
        // backbone 框架所依赖的库
        underscore : "lib/underscore",
        // backbone 框架：注意我们的项目只用到了这个框架内的路由模块
        backbone : "lib/backbone",
        // 路由器模块
        router : "router"
    }
})

// 注意：当这里导入的不是 jquery 而是 zepto 时，函数的形参不能写，不然会报错
require(["jquery", "backbone", "router"], function ($) {
    $(function () {
        console.log($);
        // 注意：Backbone 是框架中的一个类名，并不是全局的
        console.log(Backbone);
/* 这部分模块化了：router.js */
//      // 构建路由器
//      var Router = Backbone.Router.extend({
//          routes: {
//              // 属性是 index.html 中的锚点值
//              // 值是点击该锚点触发的功能逻辑
//              "home" : function () {
//                  console.log("home");
//              },
//              "market" : function () {
//                  console.log("market");
//              },
//              "cart" : function () {
//                  console.log("cart");
//              },
//              "mine" : function () {
//                  console.log("mine");
//              }
//          }
//      });
//      
//      // 路由构建好后，需要进行实例化
//      new Router();
//      // 驱动路由的 URL
//      Backbone.history.start();
    })
})

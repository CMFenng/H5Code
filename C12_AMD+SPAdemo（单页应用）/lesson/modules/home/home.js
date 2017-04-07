// 使用 text 和 css 可以解析 html 内容和 css 内容
// 语法是 text! + 路径       这个导出的是 xxx.html 文件的内容
// $css! + 路径，这个不需要导出，自动会渲染到当前引入的当前页面中
define(["text!./home.html", "../goods/goods", "$css!./home.css"], function (html, Goods) {
    
//  // 单击触发事件
//  function goodsDetailFn () {
//      console.log($(this).html());
//      // 构建一个参数
//      var goodsStr = JSON.stringify({
//          goodsId : $(this).next().val(),
//          goodsName : $(this).html()
//      });
//      
//      console.log(goodsStr);
//      // 这里需要调用路由的相关方法，来映射到路由规则里面
//      var router = new Backbone.Router();
//      router.navigate("goods/goodsStr_" + goodsStr, {
//          trigger : true
//      });
//  }
    
    // 单击触发事件
    function goodsDetailFn2 () {
        // 这里需要调用路由的相关方法，来映射到路由规则里面
        var router = new Backbone.Router();
        router.navigate("goods/goodsId_" + $(this).next().val(), {
            trigger : true
        });
    }
    
    return {
        // 渲染页面的方法
        render : function () {
//          $("#container").html("<h1>首页<h1>");
            $("#container").html(html);
            
            // 假数据（商品列表）
//          var goods = [
//              { goodsId : 1001, goodsName : "商品1" },
//              { goodsId : 1002, goodsName : "商品2" },
//              { goodsId : 1003, goodsName : "商品3" },
//              { goodsId : 1004, goodsName : "商品4" }
//          ]
            
//          $.each(goods, function(idx, tempGoods) {
//              $("<li>" + tempGoods.goodsName + 
//                  "</li><input type='hidden' value='" + 
//                      tempGoods.goodsId + "' />").appendTo("#home .goodsListUl")
//                      .on("click", goodsDetailFn);
//          });
            
            // 从 Goods 模块中获取的数据列表
            var goods = Goods.getGoodsList();
            
            $.each(goods, function(idx, tempGoods) {
                $("<li>" + tempGoods.goodsName + 
                    "</li><input type='hidden' value='" + 
                        tempGoods.goodsId + "' />").appendTo("#home .goodsListUl")
                        .on("click", goodsDetailFn2);
            });
        }
    }
})
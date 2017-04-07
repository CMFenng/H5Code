define(['backbone'], function () {
	//构建路由器
		var Router = Backbone.Router.extend({
		  routes: {
		    'home' : function () {
//		    		$('#container').html("<h1>首页</h1>");
				//使用home模块
				require(['./modules/home/home'], function (Home) {
					//调用页面渲染的方法
					Home.render();
				})
		    },
		    'market' : function () {
//		    		$('#container').html("<h1>闪送超市</h1>");
				require(['./modules/market/market'], function (Market) {
					Market.render();
				})
		    },
		    'cart' : function () {
//		    		$('#container').html("<h1>购物车</h1>");
				require(['./modules/cart/cart'], function (Cart) {
					//调用页面渲染的方法
					Cart.render();
				})
		    },
		    'mine' : function () {
//		    		$('#container').html("<h1>我的</h1>");
				require(['./modules/mine/mine'], function (Mine) {
					//调用页面渲染的方法
					Mine.render();
				})
		    },
		    //除了以上路由规则以外的情况
		    '*action' : function () {
		    		location.hash = 'home';
		    }
		  }
		});
		
		//路由构建好后，需要进行实例化
		new Router();
		//驱动路由的URL
		Backbone.history.start();
})
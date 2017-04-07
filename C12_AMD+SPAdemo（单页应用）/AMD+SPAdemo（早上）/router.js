define(['backbone'], function () {
	//构建路由器
		var Router = Backbone.Router.extend({
		  routes: {
		    //属性是 index.html中的 锚点值
		    //值是点击该锚点触发的功能逻辑
		    'home' : function () {
		    		console.log('home');
//		    		$('#container').html("<h1>首页</h1>");
				//使用home模块
				require(['./modules/home/home'], function (Home) {
					//调用页面渲染的方法
					Home.render();
				})
		    },
		    //因为index.html该锚点 传递了2个参数，所以这里要修改下路由匹配规则
		    // /:userName/:userAge 表示2个参数，可以理解为形参。分别对应
		    // 该锚点传过来的 小雪 和 18 这两个值
		    'market/:userName/:userAge' : function (userName, userAge) {
		    		console.log('market');
		    		console.log(userName, userAge);
//		    		$('#container').html("<h1>闪送超市</h1>");
				require(['./modules/market/market'], function (Market) {
					//调用页面渲染的方法
					//可以把参数传递到渲染页面的方法中使用
					Market.render(userName, userAge);
				})
		    },
		    //注意：第二个参数的age_ 是一个参数的前缀限制，也就是说传递的参数格式
		    //一定要是age_xxx 才可以匹配到该路由。。 在获取参数的时候，age_不计算在内
		    'cart/:userName/age_:userAge' : function (userName, userAge) {
		    		console.log('cart');
		    		console.log(userName, userAge);
//		    		$('#container').html("<h1>购物车</h1>");
				require(['./modules/cart/cart'], function (Cart) {
					//调用页面渲染的方法
					Cart.render(userName, userAge);
				})
		    },
		    //支持一个参数或者2个参数的路由匹配
		    //注意：()内的参数，可传可不传
		    'mine/:userName(/:userAge)' : function (userName, userAge) {
		    		console.log('mine');
		    		console.log(userName, userAge);
//		    		$('#container').html("<h1>我的</h1>");
				require(['./modules/mine/mine'], function (Mine) {
					//调用页面渲染的方法
					Mine.render(userName, userAge);
				})
		    }
		  }
		});
		
		//路由构建好后，需要进行实例化
		new Router();
		//驱动路由的URL
		Backbone.history.start();
})
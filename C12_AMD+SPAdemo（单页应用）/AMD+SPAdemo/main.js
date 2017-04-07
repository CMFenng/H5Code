require.config({
	paths : {
		jquery : 'lib/jquery',
		zepto : 'lib/zepto',
		//解析html内容的库
		text : 'lib/text',
		//解析css内容的库
		//注意：这个名字前面我们要加一个$, 如果不加，以后代码压缩会有问题
		$css : 'lib/css',
		//backbone框架所依赖的库
		underscore : 'lib/underscore',
		//backbone框架：注意我们的项目只用到了这个框架内的路由模块
		backbone : 'lib/backbone',
		//路由器模块
		router : 'router'
	}
})

require(['jquery', 'zepto', 'backbone', 'router'], function () {
	$(function () {
		jQuery.noConflict(true);
		console.log($);
		// 注意：Backbone是框架中的一个类名，并不是全局的
		console.log(Backbone);
//		//构建路由器
//		var Router = Backbone.Router.extend({
//		  routes: {
//		    //属性是 index.html中的 锚点值
//		    //值是点击该锚点触发的功能逻辑
//		    'home' : function () {
//		    		console.log('home');
//		    },
//		    'market' : function () {
//		    		console.log('market');
//		    },
//		    'cart' : function () {
//		    		console.log('cart');
//		    },
//		    'mine' : function () {
//		    		console.log('mine');
//		    }
//		  }
//		});
//		
//		//路由构建好后，需要进行实例化
//		new Router();
//		//驱动路由的URL
//		Backbone.history.start();
	})
})




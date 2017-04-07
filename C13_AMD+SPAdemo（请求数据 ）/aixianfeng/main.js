require.config({
	paths : {
		jquery : './lib/jquery',
		//css.js是为了给requireJS导入css文件模块进行转换用的
		//注意：导入模块的名字前面要加一个标识例如：$css，不加$的话有可能会有问题
		$css : './lib/css',
		//text.js是为了给requireJS导入html文件模块进行转换用的
		text : './lib/text',
		//underscore.js是为了支持backbone.js
		underscore : './lib/underscore',
		//backbone.js 是一个框架，但我们只用到里面的路由模块功能
		backbone : './lib/backbone',
		//导入路由模块
		router : './router',
		//导入百度模板
		template : './lib/baiduTemplate',
		//导入jquery.lazyload插件
		lazyload : './lib/jquery.lazyload.min'
	}
});

require(['jquery', 'router'], function () {

});
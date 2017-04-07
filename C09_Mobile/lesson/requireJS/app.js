// 这里可以写配置相关的代码，比如：利用  require.config 方法配置模块的路径
require.config({
	// paths 是配置模块的路径
	paths : {
		// ../lib/jquery 表示通过该路径下的 jquery.js（.js 记得去掉，可能会报错或不能用）
		// 属性 jquery 是随便起的一个名字（导入 jquery.js 时，这个属性尽量叫做 jquery）
//		jquery : "../lib/jquery"
		// 路径值还可以是一个数组，还可以导入网络的模块（js库）（可以导入多个，防止因网络问题加载失败后可以自动加载后面的）
		jquery : ["http://libs.baidu.com/jquery/2.0.0/jquery.min", "../lib/jquery"],
		a : "./modules/modulesA/a",
		b : "./modules/modulesB/b"
	}
})

// 使用 require 方法进行导入使用
/*
	第一个参数表示所要加载的模块名字
	第二个参数表示加载模块后的回调（要处理的功能）
	回调函数的参数是：加载模块所导出该模块对应的值（对象。。方法。。普通变量。。）
	我们一般把没有模块导出的模块，放在后面。例如：a 放在 jquery 后面
	因为回调函数中的参数就是前面模块导出的值（对象等。。）要一一对应上才行
	如果 a 没有模块带出，那么要是 a 放在 jquery 前面，那么 jq 打印出来的是 undefined
*/
// ./modules/modulesC/c 也可以在这里直接写死，不在上面配置
// 注意：./modules/modulesC/c 这里这么配置的话，会把当前依赖的路径定位到这个目录下
// 去 c.js 中看下就知道说的路径定位问题了
require(["jquery", "a", "b", "./modules/modulesC/c"], function (jq, a, b, c) {
	console.log($);
	console.log(jq);
	console.log(a.sum(3, 4));
	a.changeDivColor();
	
	console.log(b.sumAndMul(1, 2));
	
	console.log(c.fn(1, 2));
});

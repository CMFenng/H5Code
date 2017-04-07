//这里可以写配置相关的代码，比如：利用require.config方法配置模块的路径
require.config({
	//paths 是配置模块的路径
	paths : {
		// ../lib/jquery 表示通过该路径下的jquery.js
		// 属性jquery 是随便起的一个名字， 这个属性以后尽量叫做jquery
//		jquery : '../lib/jquery'
		//路径值还可以是一个数组，还可以导入网络的模块（js库）
		jquery : ['http://libs.baidu.com/jquery/2.0.0/jquery.min', '../lib/jquery'],
		a : './modules/modulesA/a',
		b : './modules/modulesB/b'
	}
})

//使用require方法进行导入使用 
/*
 * 第一个参数表示所要加载的模块名字
 * 第二个参数表示加载模块后的回调（要处理的功能）
 * 回调函数的参数是： 加载模块所导出该模块对应的值（对象。。方法。。普通变量。。）
 * 我们一般把没有模块导出的模块，放在后面。例如：a放在jquery后面，
 * 因为回调函数中的参数就是前面模块导出的值（对象等。。）要一一对应上才行
 */
// ./modules/modulesC/c 也可以在这里直接写死，不在上面配置
// 注意：./modules/modulesC/c 这里这么配置的话，会把当前依赖的路径定位到这个目录下
// 去c.js中看下 就知道说的 路径定位问题了。。。
require(['jquery', 'a', 'b', './modules/modulesC/c'], function (jq, a, b, c) {
	console.log($);
	console.log(jq);
	console.log(a.sum(3, 4));
	a.changeDivBgColor();
	
	console.log(b.sumAndMul(1, 2));
	
	console.log(c.fn(1, 2));
});

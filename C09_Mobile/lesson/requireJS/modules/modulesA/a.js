// 使用 define 方法来定义模块
// 把你要写的功能，写在这个匿名函数中
define(function () {
//	alert(123);
//	var num = 3;
	// 相加
	function sum (a, b) {
		return a + b;
	}
	
	return {
		sum : sum,
		// 也可以把某个功能写在这里
		changeDivColor : function () {
			// jquery 加载完成后，就是全局，不需要额外再导入就可以使用
			$("#box").css({
				backgroundColor : "red"
			});
		}
	}
})
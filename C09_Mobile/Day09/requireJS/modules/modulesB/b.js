//定义模块的时候，可以依赖于其他模块
//例如['a'] 意思就是依赖于 a 模块  A就是a模块导出的对象
define(['a'], function (A) {
	
	//局部函数，给自己的模块使用
	function mul (x, y) {
		return x - y;
	}
	
	return {
		//两数相加的和 在加上 两个数相减的差
		sumAndMul : function (x, y) {
			$("#box").css({
				backgroundColor : 'blue'
			});
			
			return A.sum(x, y) + mul(x, y);
		}
	}
})
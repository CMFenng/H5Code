// 如果要依赖的模块没有在 config 中配置的话，我们可以写死路径进行依赖
// 因为前面用 ./modules/modulesC/c 去加载的 c 模块，会把当前路径定位到 modulesC 下
// 所以这里应该写 ../../modules/modulesA/a
define(["../../modules/modulesA/a", "b"], function (A, B) {
	
	return {
		// a 模块的 sum 的结果 + 刚才 b 模块的 sumAndMul 的结果
		fn : function (x, y) {
			$("#box").css({
				backgroundColor : "orange"
				// 这里执行到 return 后又变为蓝色
			});
			return A.sum(x, y) + B.sumAndMul(x, y);
		}
	}
})
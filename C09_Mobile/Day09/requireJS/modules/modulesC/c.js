//如果要依赖的模块没有在config中配置的话，我们可以写死路径进行依赖
//因为前面用./modules/modulesC/c去加载的C模块，会把当前路径定位到modulesC下
// 所以这里应该写../../modules/modulesA/a
define(['../../modules/modulesA/a', 'b'], function (A, B) {
	
	return {
		//a模块的sum的结果 + 刚才b模块的sumAndMul的结果
		fn : function (x, y) {
			$("#box").css({
				backgroundColor : 'orange'
			});
			return A.sum(x, y) + B.sumAndMul(x, y);
		}
	}
})
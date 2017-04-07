//参数1：周期序列	参数2：动画算子序列	参数3：回调函数序列
function Animator (durations, easings, pros) {
	//动画周期，如果传进来的参数不符合，则默认周期为 []
	this.durations = durations || [];
	//动画使用到的动画算子
	this.easings = easings || [];
	//动画执行期间需要执行的回调函数
	this.pros = pros || [];
}

//启动动画		参数：表示是否循环
Animator.prototype.start = function (loop) {
	var startTime = new Date();
	//记录正在执行的动画的序列的下标
	var index = 0;
	var duration, p, pro, easing;
	//因为 requestAnimationFrame 是 window 调用的，所以要把 this 绑定
	var self = this;
	
	self.id = requestAnimationFrame(function step () {
		duration = self.durations[index];
		easing = self.easings[index];
		pro = self.pros[index];
		//计算归一化的时间
		p = Math.min(1, (new Date() - startTime) / duration);
		//执行传入的回调函数，并把动画算子计算结果和归一化的时间也传入
		pro(easing(p), p);
		if (p == 1) {
			//判断动画是否都执行完了
			if (index == self.durations.length - 1) {
				//判断是否循环
				if (loop) {
					//因为后面有自加会把index赋为0
					index = -1;
				} else {
					return;
				}
			}
			index++;
			startTime = new Date();
		}
		self.id = requestAnimationFrame(step);
	});
}
//停止动画
Animator.prototype.stop = function () {
	cancelAnimationFrame(this.id);
}

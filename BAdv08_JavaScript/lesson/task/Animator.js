function Animator (duration, easing, process) {
	//动画周期，如果传进来的参数不符合，则默认周期为 1000ms
	this.duration = duration || 1000;
	//动画使用到的动画算子
	this.easing = easing;
	//动画执行期间需要执行的回调函数
	this.process = process;
	
	//判断动画算子是否是一个函数，如果不是，则默认为匀速运动
	if (!(this.easing instanceof Function)) {
		this.easing = function (p) {
			//直接将归一化时间返回
			return p;
		}
	}
}
//启动动画		参数：表示是否循环
Animator.prototype.start = function (loop) {
	//判断 process 是不是函数，不是就直接返回
	if (!(this.process instanceof Function)) {
		return;
	}
	var startTime = new Date();
	var p;
	//因为 requestAnimationFrame 是 window 调用的，所以要把 this 绑定
	var self = this;
	
	this.animatorId = requestAnimationFrame(function step () {
		//计算归一化的时间
		p = Math.min(1, (new Date() - startTime) / self.duration);
		//执行传入的回调函数，并把动画算子计算结果和归一化的时间也传入
		self.process(self.easing(p), p);
		if (p == 1) {
			if (loop) {
				startTime = new Date();
			} else {
				return;
			}
		}
		self.animatorId = requestAnimationFrame(step);
	});
}
Animator.prototype.stop = function () {
	cancelAnimationFrame(this.animatorId);
}

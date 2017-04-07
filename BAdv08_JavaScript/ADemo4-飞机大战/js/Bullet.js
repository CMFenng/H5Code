/**
 * 子弹的构造方法
 * @param {Object} x
 * @param {Object} y
 */
function Bullet(x,y){
	this.mainNode = document.getElementById('containner');
	this.bullet = document.createElement('div');//创建子弹div
	this.bullet.className = 'bullet';
	this.mainNode.appendChild(this.bullet);
	//设置子弹初始位置
	this.bullet.style.left = x + 'px';
	this.bullet.style.top = y +'px';
	//设定子弹的速度
	this.speed = 10;
}
/**
 * 子弹销毁的方法
 */
Bullet.prototype.destory = function(){
	var self = this;
	self.bullet.className = 'bullet_die';
	var count = 0;
	self.destoryTimer = setInterval(function(){
		if(count == 2){
			clearInterval(self.mTimer);//不能移动了
			clearInterval(self.destoryTimer);//不能继续销毁
			self.mainNode.removeChild(self.bullet);//移除子弹节点
			return;
		}
		count++;
		self.bullet.style.backgroundImage = 'url(img/images/die' + count + '.png';
	},50);
}
//子弹运行轨迹
Bullet.prototype.move = function(){
	var self =this;
	//子弹移动的定时器
	self.mTimer = setInterval(function(){
		var current = self.bullet.offsetTop;
		//超出上边界，移除子弹
		if(current < -500){
			clearInterval(self.mTimer);//不能移动了
			self.mainNode.removeChild(self.bullet);//移除节点
			return;
		}
		self.bullet.style.top = current - self.speed + 'px';
	},30);
}
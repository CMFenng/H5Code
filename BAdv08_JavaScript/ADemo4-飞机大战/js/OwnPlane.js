/**
 * 创建自己的飞机的构造方法
 */
function OwnPlane() {
	this.mainNode = document.getElementById('containner');
	this.ownPlane = document.createElement('div');
	this.ownPlane.id = 'ownPlane';
	this.mainNode.appendChild(this.ownPlane);
	//子弹数组
	this.bulletArr = [];
	this.getMove();
}
/**
 * 自己的飞机销毁的方法
 * @param {Object} callBack
 */
OwnPlane.prototype.destory = function(callBack) {
	var self = this;
	var count = 0;
	self.stop();//飞机即将被销毁，需要先停止移动
	/**
	 * 飞机销毁的时候的图片变化定时器
	 */
	self.destoryTimer = setInterval(function() {
		if(count == 4) {
			clearInterval(self.destoryTimer);//已经销毁的飞机不继续变化图片
			clearInterval(self.bulletTimer);//清除发射子弹定时器
			self.mainNode.removeChild(self.ownPlane);//删除飞机节点
			if(callBack) {
				callBack();
			}
			return;
		}
		count++;
		self.ownPlane.style.backgroundImage = 'url(img/images/me_die' + count + '.png';
	}, 50);
}
//飞机开火
OwnPlane.prototype.fire = function(level) {
	var self = this;
	//定时创建子弹对象并发射
	self.bulletTimer = setInterval(function() {
		var x = self.ownPlane.offsetLeft + self.ownPlane.offsetWidth / 2 - 3;//减3是子弹有宽度7
		var y = self.ownPlane.offsetTop - 20;//从飞机内部发出，子弹高18
		//创建子弹
		var bullet = new Bullet(x, y);
		//子弹移动
		bullet.move();
		//添加子弹到数组
		self.bulletArr.push(bullet);
	}, level);
}
/**
 * 飞机的移动方法
 */
OwnPlane.prototype.getMove = function() {
	var self = this;
	this.ownPlane.onmousedown = function(evt) {
		var oEvent = evt || event;
		//事件的实际偏移的X和Y值就是【飞机的移动的X和Y方向上的距离】
		self.disX = oEvent.offsetX;
		self.disY = oEvent.offsetY;
		document.onmousemove = function(evt) {
			var oEvent = evt || event;
			//改变位置的时候
			self.changePosition(oEvent.clientX, oEvent.clientY);
		}
		document.onmouseup = function() {
			self.stop();
		}
	}
}
/**
 * 飞机停止移动的方法
 */
OwnPlane.prototype.stop = function() {
	document.onmousemove = null;
	document.onmouseup = null;
}
/**
 * 飞机改变位置的时候
 * @param {Object} x
 * @param {Object} y
 */
OwnPlane.prototype.changePosition = function(x, y) {
	//作为新的left值
	var left = x - this.disX - this.mainNode.offsetLeft;
	//判断是否超过了左右边界
	if(left <= 0) {
		left = 0;
	} else if(left >= this.mainNode.offsetWidth - self.ownPlane.offsetWidth) {
		left = this.mainNode.offsetWidth - self.ownPlane.offsetWidth;
	}
	this.ownPlane.style.left = left + 'px';
	this.ownPlane.style.top = y - this.disY + 'px';
}
/**
 * 敌机的构造方法
 * @param {Object} classname
 */
function Enemy(classname) {
	this.mainNode = document.getElementById('containner');
	this.enemyPlane = document.createElement('div');
	this.enemyPlane.className = classname;
	this.mainNode.appendChild(this.enemyPlane);
	//设置敌机初始位置
	this.enemyPlane.style.left = Math.floor(Math.random() * (this.mainNode.offsetWidth - this.enemyPlane.offsetWidth)) + 'px';
	this.enemyPlane.style.top = -1 * this.enemyPlane.offsetHeight + 'px';
	if(classname == 'plane1') {
		//设置速度
		this.speed = 10;
		this.dieImageArr = ['plane1_die1.png', 'plane1_die2.png', 'plane1_die3.png'];
		this.hp = 2;
		this.score = 20;
	} else if(classname == 'plane2') {
		this.speed = 7;
		this.dieImageArr = ['plane2_die1.png', 'plane2_die2.png', 'plane2_die3.png', 'plane2_die4.png'];
		this.hp = 5;
		this.score = 50;
	} else if(classname == 'plane3') {
		this.speed = 3;
		this.dieImageArr = ['plane3_die1.png', 'plane3_die2.png', 'plane3_die3.png', 'plane3_die4.png', 'plane3_die5.png', 'plane3_die6.png'];
		this.hp = 10;
		this.score = 100;
	}
}
//敌机受伤
Enemy.prototype.hurt = function(callBack){
	var self = this;
	if(--self.hp == 0){
		if(callBack){
			callBack(self.score);
		}
		//敌机销毁
		self.destory();
	}
}
//敌机销毁
Enemy.prototype.destory = function() {
	var self = this;
	var count = 0;
	self.destoryTimer = setInterval(function() {
		//如果已经被销毁掉，那么。。。
		if(count == self.dieImageArr.length - 1) {
			//清除向下移动的定时器
			clearInterval(self.aTimer);
			//清除销毁的定时器
			clearInterval(self.destoryTimer);
			//移除敌机div
			self.mainNode.removeChild(self.enemyPlane);
			console.log('11');
			return;
		}
		count++;
		self.enemyPlane.style.backgroundImage = 'url(img/images/' + self.dieImageArr[count] + ')';
	}, 50);
}

//进攻路线
Enemy.prototype.attack = function() {
	var self = this;
	//每30ms向下移动一次
	self.aTimer = setInterval(function() {
		var current = self.enemyPlane.offsetTop;
		//判断飞机飞出了下边界
		if(current > self.mainNode.offsetHeight) {
			//清除向下移动的定时器
			clearInterval(self.aTimer);
			//移除敌机div
			self.mainNode.removeChild(self.enemyPlane);
			return;
		}
		self.enemyPlane.style.top = current + self.speed + 'px';
	}, 30);
}
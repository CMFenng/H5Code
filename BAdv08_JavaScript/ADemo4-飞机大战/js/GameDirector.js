/**
 * 构造方法
 * @param {Object} level
 */
function GameDirector(level) {
	//找到主界面节点
	this.mainNode = document.getElementById('containner');
	//找到分数节点
	this.scoreNode = document.getElementById('score');
	//游戏难度
	this.level = level;
	//敌机数组(现在还是空的)
	this.enemyArr = [];
}
//给GameDirector的原型添加一个start方法
GameDirector.prototype.start = function() {
	var self = this;
	//开始游戏->游戏执行->结束游戏
	/*
	 * 1.切换loading界面
	 * 2.地图移动
	 * 3.加载玩家飞机
	 * 4.加载敌机
	 * 5.碰撞检测
	 */
	//函数回调
	self.load(function(){
		//显示分数
		self.scoreNode.style.display = 'block';
		//开始移动地图
		self.mapMove();
		//加载玩家飞机
		self.createOwnPlane();
		//加载敌机
		self.createEnemy();
		//碰撞检测
		self.check();
	});
}
//开始移动地图
GameDirector.prototype.mapMove = function() {
		var self = this;
		//移动的是背景图的位置
		var y = 0;
		//设置定时器：每30ms移动一次
		self.mapTimer = setInterval(function() {
			//Y轴的值不断地增大
			self.mainNode.style.backgroundPositionY = ++y + 'px';
		}, 30);
};
//加载敌机
GameDirector.prototype.createEnemy = function() {
	var self = this;
	//定时创建敌机
	self.enemyTimer1 = setInterval(function() {
		//随机出那种类型飞机的概率
		var number = Math.random();
		var enemey = null;
		if(number < 0.5) {
			enemey = new Enemy('plane1');
		} else if(number < 0.92) {
			enemey = new Enemy('plane2');
		} else {
			enemey = new Enemy('plane3');
		}
		//敌机袭击(只会碰，不会发射子弹)
		enemey.attack();
		//敌机产生后压栈到数组中
		self.enemyArr.push(enemey);
	}, 800);//每隔800ms就产生一架飞机
};

//加载玩家飞机
GameDirector.prototype.createOwnPlane = function() {
	//创建飞机
	this.oPlane = new OwnPlane();
	//发射子弹
	this.oPlane.fire(this.level);
}
//切换loading界面
GameDirector.prototype.load = function(callBack) {
	var self = this;
	//移除选单界面
	self.mainNode.removeChild(document.getElementById('list'));
	//添加logo节点
	var logoNode = document.createElement('div');
	logoNode.id = 'logo';
	self.mainNode.appendChild(logoNode);
	//loading动画节点
	var loadNode = document.createElement('div');
	loadNode.id = 'load';
	this.mainNode.appendChild(loadNode);
	var loadIndex = 1;
	//切换loading图
	self.loadTimer = setInterval(function() {
		//如果第三张图片已经播放完毕
		if(loadIndex == 3) {
			//清除加载定时器
			clearInterval(self.loadTimer);
			//移除logo节点
			self.mainNode.removeChild(logoNode);
			//移除load节点
			self.mainNode.removeChild(loadNode);
			//动画结束
			if(callBack) {
				callBack();
			}
			return;
		}
		loadIndex++;
		loadNode.style.backgroundImage = 'url(img/images/loading' + loadIndex + '.png)'
	}, 300);
}

//监听检测
GameDirector.prototype.check = function() {
	var self = this;
	//每隔30ms检测一次
	self.checkTimer = setInterval(function() {
		//遍历敌机
		for(var i = 0; i < self.enemyArr.length; i++) {
			//遍历敌机
			var enemyPlaneObj = self.enemyArr[i];
			//判断敌机和玩家飞机是否相撞
			if(self.isCrash(self.oPlane.ownPlane, enemyPlaneObj.enemyPlane) && 
			!self.ownPlaneCrash) {
				//true表示飞机已经被撞了
				self.ownPlaneCrash = true;
				//飞机销毁
				self.oPlane.destory(function() {
					//游戏结束
					alert('GameOver');
					history.go(0);
				});
			};
			
			//判断子弹是否击中敌机
			for(var j = 0; j < self.oPlane.bulletArr.length; j++) {
				//遍历自己的飞机的每一颗子弹对象
				var bulletObj = self.oPlane.bulletArr[j];
				//如果敌机与子弹之间存在碰撞
				if(self.isCrash(enemyPlaneObj.enemyPlane, bulletObj.bullet)) {
					self.oPlane.bulletArr.splice(j,1);
					//子弹销毁掉
					bulletObj.destory();
					//敌机受伤
					enemyPlaneObj.hurt(function(score){
						self.enemyArr.splice(i,1);
						//敌机已经被击中
						enemyPlaneObj.isCrash = true;
						//原来分数
						var orignalScore = self.scoreNode.innerHTML * 1;
						//修改分数
						self.scoreNode.innerHTML = orignalScore + score;
					});
				}
			}
		}
	}, 30);
}

//碰撞检测(敌机与自己的飞机或者子弹与敌机)
GameDirector.prototype.isCrash = function(obj1, obj2) {
	var left1 = obj1.offsetLeft;
	var top1 = obj1.offsetTop;
	var width1 = obj1.offsetWidth;
	var height1 = obj1.offsetHeight;
	
	var left2 = obj2.offsetLeft;
	var top2 = obj2.offsetTop;
	var width2 = obj2.offsetWidth;
	var height2 = obj2.offsetHeight;
	
	if(left1 > left2 - width1 + 10 && 
		left1 < left2 + width2 - 10 && 
		top1 < top2 + height2 - 10 && 
		top1 > top2 - height1 + 10) {
		//存在碰撞
		return true;
	} else {
		//没有碰撞
		return false;
	}
}
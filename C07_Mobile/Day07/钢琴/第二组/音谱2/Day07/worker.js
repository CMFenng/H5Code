(function () {
	//模拟一个耗时操作
	for (var i = 0; i < 5000000000; i++) {
		
	}
	
	//当耗时操作完毕之后，把操作返回的数据可以通过postMessage()方法，传入主线程
	//在主线程给woker绑定一个onmessage事件，在该事件中处理更新UI的代码。
	postMessage(i);
})();

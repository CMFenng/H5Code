//生成验证码的函数
function getCode(m) {
	var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var code = "",
		n, len = str.length;
	for(var i = 0; i < m; i++) {
		n = parseInt(Math.random() * len);
		code += str.charAt(n);
	}
	return code;
}
//封装通过id找对象的函数
function $(id) {
	return document.getElementById(id);
}
//随机生成一个十六进制的颜色值
function randColor(color){
	var arr =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var color = "#"
	for(var i=0;i<3;i++){
		var num = parseInt(Math.random()*arr.length);
		color+=arr[num];
	}
	return color;
}
//删除空白节点
function delSpace(id) {
	var nodes = document.getElementById(id).childNodes;
	for(var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeType == 3) {
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
	return nodes;
}

function deleleSpace(obj) {
	var nodes = obj.childNodes;
	for(var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeType == 3) {
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
	return nodes;
}
//在。。。之后插入一个新节点 insertAfter
function insertAfter(newNode, targetNode) {
	var parent = targetNode.parentNode;
	if(targetNode == parent.lastChild) {
		parent.appendChild(newNode);
	} else {
		parent.insertBefore(newNode, targetNode.nextSibling);
	}
}
//获取内部样式表和外部样式表的方法
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, null)[attr];
	}
}
//获取可视化窗口的宽度
function $w(){
	return document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth;
}
//获取可视化窗口的高度
function $h(){
	return document.body.clientHeight || document.documentElement.clientHeight || window.innerHeight;
}
//将得到的数字转成相应的星期几
function getWeek(week){
	var w;
	switch(week){
		case 0: w="星期日";break;
		case 1: w="星期一";break;
		case 2: w="星期二";break;
		case 3: w="星期三";break;
		case 4: w="星期四";break;
		case 5: w="星期五";break;
		case 6: w="星期六";break;
	}
	return w;
}
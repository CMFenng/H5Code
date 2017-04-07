/**
 * Created by CMF on 2017/3/10.
 */
/*
    process
        全局的，所以在任何的地方都可以直接使用i/o input/output
*/
// data事件：监听键盘输入
/*process.stdin.on("data", function(msg){
    console.log("你刚才输入的是：" + msg);
});
console.log("abc");*/

/*
    setTimeout是全局函数
*/
var i = 1;
setTimeout(function step(){
    console.log(i++);
    setTimeout(step, 100);
}, 0);

/*
    node.js的核心模块
        http
        fs
*/
// 加载http模块
var http = require("http");
// 加载fs模块
var fs = require("fs");
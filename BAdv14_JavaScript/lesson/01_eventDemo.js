/**
 * Created by CMF on 2017/3/9.
 */
// 加载events模块
var events = require("events");
// 创建事件发射器对象
var emitter = new events.EventEmitter();
/*
    注册事件（一般用on方法）
        参数1：事件类型
        参数2：事件触发的时候的回调函数
*/
emitter.on("click", function (a, b) {
    console.log("自定义事件：" + a + " " + b);
});
// 发射事件
emitter.emit("click", undefined, 3);


var i = 1;
/*
    process.stdin
        标准输入流
*/
// data事件：监听键盘的输入
process.stdin.on("data", function (data) {
    // 转为字符串（toString方法）并去掉空格和回车（trim方法）
    // 当输入的字符串为"click"时执行发射事件
    if(data.toString().trim() == "click"){
        emitter.emit("click", undefined, i++);
    }
})
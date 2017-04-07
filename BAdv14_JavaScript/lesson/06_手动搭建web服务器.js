/**
 * Created by CMF on 2017/3/9.
 */
/*
    1. 导入提供web服务的模块：http
*/
var http = require("http");
/*
    2. 利用http模块，创建一个服务器
*/
var server = http.createServer();
/*
    3. 让服务器去监听用户的http请求，然后处理用户（浏览器）的请求
    参数1：监听request事件
    参数2：事件发生之后的回调函数
        参数1：浏览器的请求对象
        参数2：可以向浏览器响应的对象
*/
server.on("request", function (request, response) {
    console.log("谁访问我？");

    // 仅仅把数据写入缓存区
    response.write("Hello World");
    // 结束这次响应，node会把数据响应给浏览器
    response.end();
})
/*
    4. 启动服务，让服务器监听某个具体的端口（0-65535）
*/
server.listen(8888);
/*
    http://localhost:8888/
    http://127.0.0.1:8888/
    http://真实的ip:8888/
*/
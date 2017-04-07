/**
 * Created by CMF on 2017/3/9.
 */
// 导入http和url模块
var http = require("http");
var url = require("url");
// 创建服务器
var server = http.createServer();
// 注册request监听事件
server.on("request", function (request, response) {
    /*
        request.url：浏览器请求的原始url
        true：表示把查询请求进行解析为对象，false为字符串
        query：得到解析后的查询参数组成的js对象 {arg0=xxx, arg1=yyy}
        num：得到具体的参数的值
    */
    var num = url.parse(request.url, true).query.num;
    var randomNum = parseInt(Math.random() * num);
    // console.log(url.parse(request.url, true).query.num);
    response.write("尊敬的用户，你需要的随机数是：" + randomNum);
    // 结束这次响应，node会把数据响应给浏览器
    response.end();
})

server.listen(8888);

/*
如在地址栏输入http://127.0.0.1:8888/?num=200&aaa=100进行访问
    request.url    输出：/?num=200&aaa=100
    url.parse(request.url, true)   输出：一个url对象
    url.parse(request.url, true).query 输出：{ num: '200', aaa: '100' }
    url.parse(request.url, true).query.num 输出：200
*/
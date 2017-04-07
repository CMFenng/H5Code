/**
 * Created by CMF on 2017/3/9.
 */
/*
    // 导入express模块
    var express = require('express');
    // 获取一个app对象
    var app = express();
    // http://127.0.0.1:8888
    app.get('/', function (req, res) {
      res.send('<h1>你好，这是我们的第一个nodejs项目</h1>');
    });

    // http://127.0.0.1:8888/user.html
    app.get('/user.html', function (req, res) {
        res.send('<h1>你好，这是user.html</h1>');
    });

    // http://127.0.0.1:8888/abc.html
    app.get('/abc.html', function (req, res) {
        res.send('<h1>你好，这是abc.html</h1>');
    });

    app.listen(8888);
*/
//========================================================
// 导入fs和express模块
var express = require('express');
var fs = require("fs");
// 获取一个app对象
var app = express();

// http://127.0.0.1:8888/user.html
app.get('/user.html', function (req, res) {
    fs.readFile("post_test.html", "utf-8", function (err, data) {
        console.log(data);
        // 把post_test.html文件内容发送出去
        res.send(data);
    });
});

// http://127.0.0.1:8888/1.jpg
app.get('/xxx.html', function (req, res) {
    fs.readFile("C:/Users/CMF/Desktop/1.jpg", function (err, data) {
        console.log(data);
        // 把图片Buffer数据发送出去
        res.send(data);
    })
});

app.post("/", function (req, res) {
    res.send("<h1>post你好，这是我们的第一个nodejs项目post</h1>");
})

app.listen(8888);
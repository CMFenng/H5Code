/**
 * Created by CMF on 2017/3/9.
 */
// 加载fs模块
var fs = require("fs");

// 读取文件，重复执行会覆盖原内容
/*fs.readFile("hello.js", function (err, data) {
    // 如果读取失败
    if(err){
        console.log("文件读取失败");
        // 则直接返回
        return;
    }
    // 写入文件
    fs.writeFile("C:/Users/CMF/Desktop/a.js", data, function (err) {
        // 如果写入失败
        if(err){
            console.log("文件写入失败");
            // 则直接返回
            return;
        }
    });
});*/

// 追加文件内容
fs.readFile("hello.js", function (err, data) {
    // 如果读取失败
    if(err){
        console.log("文件读取失败");
        // 则直接返回
        return;
    }
    // 写入文件
    fs.appendFile("C:/Users/CMF/Desktop/a.js", data, function (err) {
        // 如果写入失败
        if(err){
            console.log("文件写入失败");
            // 则直接返回
            return;
        }
    });
});
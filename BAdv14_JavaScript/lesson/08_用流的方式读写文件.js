/**
 * Created by CMF on 2017/3/11.
 */
// 导入fs模块
var fs = require("fs");
// 创建读取流，主要用于读取大文件
var read = fs.createReadStream("图片.zip");
// 创建写入流
var write = fs.createWriteStream("C:/Users/CMF/Desktop/b.zip");
// 注册data事件
read.on("data", function (data) {
    // 写入
    write.write(data);
    // 因为是流的方式，这里的代码会执行多次
    console.log("aaa");
});
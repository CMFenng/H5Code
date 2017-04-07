/**
 * Created by CMF on 2017/3/9.
 */
var fs = require("fs");

// var msg = "Hello World";
// var msg = "今天天气不错";
var msg = Buffer.from([97, 98, 99]);//显示abc
/*
    writeFile(path, data, options, callback)
        参数1：要写入的文件的路径（如果没有，则自动新建）
        参数2：要写入的数据
        参数3：编码(默认utf-8)
        参数4：回调函数
    writeFileSync(path, data, options)
        参数1：要写入的文件的路径（如果没有，则自动新建）
        参数2：要写入的数据
        参数3：编码
*/
// 异步写法
/*fs.writeFile("test.txt", msg, function (err) {
    if(err){
        console.log("文件写入失败");
    }else{
        console.log("文件写入成功");
    }
})*/
// 同步写法
fs.writeFileSync("test.txt", msg, "utf-8");
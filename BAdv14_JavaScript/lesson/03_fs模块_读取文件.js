/**
 * Created by CMF on 2017/3/9.
 */
// 导入file system模块，专门去处理文件io
var fs = require("fs");
/*
    readFile()
        异步写法：文件读取完成之前，会继续向下执行
        参数1：文件名
        参数2：编码
        参数3：回调函数（参数1是失败时返回，参数2是成功时返回的数据）
    readFileSync
        同步写法：文件读取完成之前，不会向下执行，会一直阻塞
        参数1：文件名
        参数2：编码
*/
// 异步写法
/*fs.readFile("hello.js", "utf-8", function (err, data) {
    if(err){
        console.log("文件读取错误");
    }else{
        console.log(data);
    }
})
// 文件读取完成之前打印出来了
console.log("============");*/

// 同步写法
var data = fs.readFileSync("hello.js", "utf-8");
console.log(data);
// 文件读取完成之后才打印
console.log("=============");

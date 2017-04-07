/**
 * Created by CMF on 2017/3/9.
 */
// 绝对路径  E:\GitHub\YZTC\20170309_JS高级 第十四天\lesson
console.log(__dirname);

// 绝对路径  E:\GitHub\YZTC\20170309_JS高级 第十四天\lesson\02_全局变量.js
console.log(__filename);

// 加载path模块
var path = require("path");

// 当前文件名  02_全局变量.js
console.log(path.basename(__filename));

// 当前文件的文件夹  相当于__dirname
// E:\GitHub\YZTC\20170309_JS高级 第十四天\lesson
console.log(path.dirname(__filename));
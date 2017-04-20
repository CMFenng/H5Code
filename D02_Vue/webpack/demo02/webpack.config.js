//用于提取多个入口文件的公共脚本部分
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var webpack = require('webpack');

module.exports = {
	entry:{
		bundle1:"./module/page1",
		bundle2:"./module/page2"
	},
	output:{
		filename:"./js/[name].js"
	},
    plugins: [
        new CommonsChunkPlugin("./js/commons.js", ["bundle1", "bundle2"])
    ]
}
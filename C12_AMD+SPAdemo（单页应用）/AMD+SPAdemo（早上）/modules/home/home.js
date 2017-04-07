//使用text  和 css 可以解析 html内容和 css内容
// 语法是 text! + 路径 这个导出的是 xxx.html 文件的内容
// $css! + 路径，这个不需要导出，自动会渲染到当前引入的 当前页面中
define(['text!./home.html', '$css!./home.css'], function (html) {
	return {
		//渲染页面的方法
		render : function () {
//			$('#container').html('<h1>首页</h1>');
			$('#container').html(html);
		}
	}
})
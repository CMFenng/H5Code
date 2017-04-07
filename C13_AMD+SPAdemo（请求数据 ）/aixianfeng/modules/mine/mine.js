define(['text!./mine.html', '$css!./mine.css'], function (html) {
	return {
		//渲染页面的方法
		render : function () {
			$('#container').html(html);
		}
	}
})
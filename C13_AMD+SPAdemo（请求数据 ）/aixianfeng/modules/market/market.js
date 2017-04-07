define(['text!./market.html', '$css!./market.css'], function (html) {
	return {
		//渲染页面的方法
		render : function () {
			$('#container').html(html);
		}
	}
})
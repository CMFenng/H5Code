define(['text!./market.html', '$css!./market.css'], function (html) {
	return {
		//渲染页面的方法
		render : function (userName, userAge) {
//			$('#container').html('<h1>闪送超市</h1>');
			$('#container').html(html);
			//渲染参数
			$('#market .nameSpan').html(userName);
			$('#market .ageSpan').html(userAge);
		}
	}
})
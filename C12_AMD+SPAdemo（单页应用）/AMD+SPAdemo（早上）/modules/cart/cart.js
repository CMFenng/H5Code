define(['text!./cart.html', '$css!./cart.css'], function (html) {
	return {
		//渲染页面的方法
		render : function (userName, userAge) {
//			$('#container').html('<h1>购物车</h1>');
			$('#container').html(html);
			
			//渲染参数
			$('#cart .nameSpan').html(userName);
			$('#cart .ageSpan').html(userAge);
		}
	}
})
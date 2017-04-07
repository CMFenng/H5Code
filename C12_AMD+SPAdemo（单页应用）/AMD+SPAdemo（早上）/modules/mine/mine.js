define(['text!./mine.html', '$css!./mine.css'], function (html) {
	return {
		//渲染页面的方法
		render : function (userName, userAge) {
//			$('#container').html('<h1>我的</h1>');
			$('#container').html(html);
			
			//渲染参数
			$('#mine .nameSpan').html(userName);
			$('#mine .ageSpan').html(userAge);
			
			userAge ? $('#mine .ageSpan').parent().show() : 
				$('#mine .ageSpan').parent().hide();
			
		}
	}
})
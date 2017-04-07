var Cookie = {
	/*
	 * cookieObj: 是批量增加、修改的cookie键值对对象
	 * expiresDate: 是过期时间（咱们这里暂时定义为毫秒）
	 */
	//新增、修改
	setCookie : function (cookieObj, expiresDate) {
		var date = new Date();
		date.setTime(date.getTime() + expiresDate);
		
		for (var tempProp in cookieObj) {
			document.cookie = tempProp + "=" + escape(cookieObj[tempProp])
							+ ";expires=" + date.toGMTString();
		}
	},
	
	//查询cookie中的某个键值对
	getCookie : function (key) {
		var cookieStr = document.cookie;
		var cookieArr = cookieStr.split('; ');
		for (var tempCookie of cookieArr) {
			var tempKey = tempCookie.split('=')[0];
			var tempValue = tempCookie.split('=')[1];
			if (key == tempKey) {
				return unescape(tempValue);
			}
		}
	},
	
	//删除cookie中的某组
	delCookie : function (key) {
		this.setCookie({
			[key] : ''
		}, -10);
	}
}

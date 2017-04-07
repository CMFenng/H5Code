/**
 * Created by CMF on 2017/3/24.
 */
var Cookie = {
    /*
        cookieObj： 是批量增加、修改的 cookie 键值对对象
        expiresDate： 是过期时间（咱们这里暂时定义为毫秒）
    */
    // 新增、修改
    setCookie : function (cookieObj, expiresDate) {
        var date = new Date();
        date.setTime(date.getTime() + expiresDate);

        for (var tempProp in cookieObj) {
            document.cookie = tempProp + "=" + escape(cookieObj[tempProp])
                            + ";expires=" + date.toGMTString();
        }
    },
    
    // 查询 cookie 中的某个键值对
    getCookie : function (key) {
    	// 先获取 cookie 字符串
    	var cookieStr = document.cookie;
    	// 根据 分号+空格 来分解字符串，并存入数组中
    	var cookieArr = cookieStr.split("; ");
    	// 遍历数组，获取每一个元素
    	for (var tempCookie of cookieArr) {
    		var tempKey = tempCookie.split("=")[0];
    		var tempValue = tempCookie.split("=")[1];
    		if (key == tempKey) {
    			return unescape(tempValue);
    		}
    	}
    },
    
    // 删除 cookie 中的某组
    delCookie : function (key) {
    	this.setCookie({
    		[key] : ""
    	}, -10);
    }
}
$.ajax({
    url: basePath + "/mp/ticket",//这是后台接口
    data:{'url':encodeURIComponent(window.location.href.split('#')[0])},//这是后台需要的参数  获取当前页面url
    dataType: 'json',
    success: function ( json ){
    	var appId = json.appId;//json数据
        var signature = json.signature;
        var noncestr = json.noncestr;
        var timestamp = json.timestamp;
        wx.config({ //定义
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: noncestr,
            signature: signature,
            jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage'
                        ] // 功能列表，我们要使用JS-SDK的什么功能
        });
    }
});

wx.ready(function () {//调用微信方法就行了
	wx.showOptionMenu();
	var shareData = {
		    title: title,
		    desc: desc,
		    link: window.location.href.split('?')[0],
		    imgUrl: cover,
		    success: function(res){
		    	$.ajax({
		    		url: basePath + "/mp/share.mpernie",
		            data:{'openId':openId,'relationId':relationId},
		    	});
		    }
		  };
	wx.onMenuShareAppMessage(shareData);
	wx.onMenuShareTimeline(shareData);
});
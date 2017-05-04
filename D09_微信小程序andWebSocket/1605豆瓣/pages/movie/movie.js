var API_URL = "https://api.douban.com/v2/movie/subject/";

Page({
	data:{
		movie:{}
	},
	onLoad:function (params){
		// console.log(params);
		var that = this;
		wx.showLoading({
	      title:"加载中...",
	      mask:true,
	      success:function (){
	      	wx.request({
			  url: API_URL+params.id, 
			  data: {},
			  header: {
			      'Content-Type': 'json'
			  },
			  success: function(res) {
			  	wx.hideLoading();
			    console.log(res.data)
			    that.setData({
			    	movie: res.data
			    });
			  }
			})
	      }
	  })
		
		
	}
});
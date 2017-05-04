var API_URL = 'https://api.douban.com/v2/movie/top250';

Page({
  data: {
  	title:"加载中。。",
  	movies:[]
  },
  onLoad:function (){

    var that = this;
  	wx.showLoading({
      title:"加载中...",
      mask:true,
      success:function (){

        wx.request({
          url: API_URL, //仅为示例，并非真实的接口地址
          data: {
             count:10
          },
          header: {
              'content-type': 'json'
          },
          success: function(res) {
            wx.hideLoading();
            console.log(res.data)
            var data = res.data;
            that.setData({
              title:data.title,
              movies:data.subjects
            })
          }
        })
      }
    })
  }
})
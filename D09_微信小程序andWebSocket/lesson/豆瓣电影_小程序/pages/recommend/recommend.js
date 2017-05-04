// pages/recommend/recommend.js
Page({
  data:{
    subjects: []
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      // url: 'https://tangcaiye001.applinzi.com/top250.php',
      // url: 'http://cmfeng.applinzi.com/top250.php',
      data: {
        
      },
      header: {
          'content-type': 'json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          subjects: res.data.subjects
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
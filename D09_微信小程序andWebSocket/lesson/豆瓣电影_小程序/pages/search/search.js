// pages/search/search.js
var searchKeyWord = null;

Page({
  data:{
    subjects: []
  },
  getSearchKeyWordFn(e){
    searchKeyWord = e.detail.value;
  },
  requestData(){
    var that = this;
    
    wx.request({
      url: 'https://api.douban.com/v2/movie/search',
      data: {
        q: searchKeyWord
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
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
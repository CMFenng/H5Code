// pages/search/search.js
var API_URL = 'https://api.douban.com/v2/movie/search';

Page({
  data: {
    movies: []
  },
  // 搜索处理程序
  searchFn: function (e) {
    // 如果没有输入值
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });

    var that = this;

    wx.request({
      url: API_URL + "?q=" + e.detail.value,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        // 隐藏消息提示框
        wx.hideToast();
        that.setData({
          movies: res.data.subjects
        })
      }
    })
  },
  // 滚动到顶部
  upper(e){
    console.log(e);
  },
  // 滚动到底部
  lower(e){
    console.log(e);
  }
})
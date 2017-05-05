// pages/details/details.js
var API_URL = "https://api.douban.com/v2/movie/subject/";

var shareTitie;
var sharePath;

Page({
  data: {
    movie: {}
    // shareTitie: "",
    // shareDesc: "",
    // sharePath: ""
  },
  onLoad:function(params){
    // 生命周期函数--监听页面加载
    console.log(params);
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });

    var that = this;
    wx.request({
      url: API_URL + params.id,
      data: {},
      header: {
          'Content-Type': 'json'
      },
      success: function(res) {
        // 隐藏消息提示框
        wx.hideToast();
        console.log(res.data);
        that.setData({
          movie: res.data
          // shareTitie: res.data.title,
          // shareDesc: res.data.summary,
          // sharePath: res.data.share_url
        });
        shareTitie = res.data.title;
        sharePath = res.data.share_url;
      }
    })
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    var that = this;

    return {
      title: "分享电影 " + shareTitie, // 分享标题
      desc: "不想描述，自己看", // 分享描述
      path: sharePath, // 分享路径
      success: function(res) {
        // 分享成功
        wx.showToast({
          title: "分享成功",
          icon: "success",
          duration: 1000
        });
      }
    }
  }
})
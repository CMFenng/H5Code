// pages/recommend/recommend.js
var API_URL = 'https://api.douban.com/v2/movie/top250';
// var API_URL = 'https://tangcaiye001.applinzi.com/top250.php';

var util = require('../../utils/util.js');

Page({
  data: {
    title: "加载中...",
    movies: []
  },
  requestData(){
    var that = this;

    wx.request({
      url: API_URL,
      data: {
        
      },
      header: {
        'content-type': 'json'
      },
      success: function (res) {

        function subjects (res) {
          var subjects = res.data.subjects;
          subjects.map(function (movie) {
            movie.rating.average = util.formatAverage(movie.rating.average);
          })
          return subjects;
        }

        var moviesArr = subjects(res);

        wx.hideToast();
        that.setData({
          title: res.data.title,
          movies: moviesArr
        });
      }
    });
  },
  onLoad:function () {
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });

    this.requestData();
  },
  // 滚动到顶部
  upper(e){
    console.log(e);
  },
  // 滚动到底部
  lower(){
    this.requestData();
  }
})
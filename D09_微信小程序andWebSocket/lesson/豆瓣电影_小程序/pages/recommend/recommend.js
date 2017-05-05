// pages/recommend/recommend.js
var API_URL = 'https://api.douban.com/v2/movie/top250';
// var API_URL = 'https://tangcaiye001.applinzi.com/top250.php';

var util = require('../../utils/util.js')

var start = 0;
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
        start: start,
        count: 50
      },
      header: {
        'content-type': 'json'
      },
      // success: function (res) {

      //   wx.hideToast();
      //   that.setData({
      //     title: res.data.title,
      //     movies: res.data.subjects
      //   });
      // }
      success: function (res) {
        function subjects (res) {
          // console.log(res.data.subjects)
          var subjects = res.data.subjects;
          subjects.map(function (movie) {
            console.log(movie.rating.average)
            var average = movie.rating.average;
            average = util.formatAverage(average);
            console.log(average);
          })
          return res.data.subjects
        }
        var moviesArr = subjects(res);
        wx.hideToast();
        that.setData({
          title: res.data.title,
          movies: moviesArr
        });
      }
    });

    
    // that.setData({
    //   movies: that.movies.map(function (movies) {
    //     var average = movies.rating.average;
    //     return util.formatAverage(average)
    //   })
    // })
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
  lower(e){
    // start += 50;
    // console.log(start);
    // this.requestData();
    // if(start==250){
      // console.log("aaa")
    // }
  }
})
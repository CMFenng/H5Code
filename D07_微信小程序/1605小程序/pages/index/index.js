//index.js
//获取应用实例
var app = getApp()
app.self_show();

var common = require("../../utils/common")
common.sayHello("沈斌")


Page({
  data: {
    motto: 'Hello 育知',
    userInfo: {},
    num:0,
    array:["买菜","打游戏","学小程序"],
    view:4,
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  zouni(){

    wx.navigateTo({
      url:"../search/search"
    })
  },
  changeMotto:function (){
    this.setData({
      motto:"hello 唐菜也"
    })
  },
  onShow: function () {
    this.setData({
      num:app.globalData.num
    })
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  innerHandle(e){
    console.log(e)
  },
  middleHandle(e){
    console.log(e)
  },
  wraperHandle(e){
    console.log(e.target.dataset.name)
  }
})

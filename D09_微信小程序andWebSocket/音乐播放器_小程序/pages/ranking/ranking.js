//ranking.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title: ""
  },
  //事件处理函数
  
   onReady:function(){
    wx.setNavigationBarTitle({
      title: '排行榜'
    })
    
  }
})
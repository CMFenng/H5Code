// pages/mine/mine.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    loctaionInfo: {},
    systemInfo: {},
    networkType: null
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    // 系统信息
    wx.getSystemInfo({
      success: function (systemInfo) {
        that.setData({
          systemInfo: systemInfo
        })
      }
    })
    // 获取网络类型
    wx.getNetworkType({
      success: function(res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        console.log(networkType)
        that.setData({
          networkType: networkType
        })
      }
    })
    // 监听网络状态变化
    wx.onNetworkStatusChange(function(res) {
      console.log(res.isConnected)
      console.log(res.networkType)
      var networkType = res.networkType
      that.setData({
        networkType: networkType
      })
    })
  },
  onShow: function () {
    var that = this
    // 获取用户的位置信息
    wx.getLocation({
      success: function (loctaionInfo) {
        that.setData({
          loctaionInfo: loctaionInfo
        })
      }
    })
  }
})
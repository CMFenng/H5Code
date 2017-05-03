//index.js
//获取应用实例
var app = getApp()
app.self_show();

var common = require("../../utils/common")
common.sayHello("沈斌")

var scrollIds = ["a","b","c"];
var scrollIdIndex = 0;

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}

var x = 0;
var speedX = 2;
var screenWidth = 0;
var screenHeight = 0;
//frame帧数
var frame = 0;

var user = null;
var pass = null;

//获取豆瓣电影top250
//https://api.douban.com/v2/movie/top250?start=xx&count=xx
//搜索
//https://api.douban.com/v2/movie/search?q=搜索内容

Page({
  data: {
    motto: 'Hello 育知',
    userInfo: {},
    num:0,
    array:["买菜","打游戏","学小程序"],
    view:4,
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    percent:0,
    scrollId:"a",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ],
    index:0,
    time:'12:01',
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 5,
    days: days,
    day: 3,
    value: [9999, 1, 1],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    imgArray: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, { 
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, { 
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, { 
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域' 
    }, {      
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, { 
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, { 
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, { 
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, { 
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域' 
    }, { 
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, { 
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, { 
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=2017427',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }],
    mapScale:10,
    markers: [{
      iconPath: "/images/featured.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    },{
      iconPath: "/images/search.png",
      id: 1,
      latitude: 23.099994,
      longitude: 113.424520,
      width: 50,
      height: 50
    }],
    polyline:[{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: false
    }],
    controls: [{
      id: 3,
      iconPath: '/images/profile.png',
      position: {
        left: 0,
        top: 50,
        width: 50,
        height: 50
      },
      clickable: true
    },{
      id: 4,
      iconPath: '/images/usbox.png',
      position: {
        left: 0,
        top: 120,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  login(){
    wx.request({
      // url:"https://tangcaiye001.applinzi.com/login.php",
      url:"https://api.douban.com/v2/movie/search",
      data:{
        q:user
      },
      header: {
      'content-type': 'json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  userFn(e){
    // console.log(e)
    user = e.detail.value;
  },
  passFn(e){
    pass = e.detail.value;
  },
  onReady(){
    var moveBol = true;
    wx.getSystemInfo({
      success:function (s){
        // console.log(s)
        screenWidth = s.screenWidth;
        screenHeight = s.screenHeight;
        moveBol = false;
      }
    })
     // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    function drawRect(){
      if(moveBol){
        return
      }
      if (frame%2==0){
        x += speedX;
        if (x >= screenWidth-50){
          speedX *= -1;
        }else if (x < 0){
          speedX *= -1;
        }
      }
      
      context.setStrokeStyle("#00ff00")
      context.setLineWidth(5)
      context.rect(x, 0, 50, 50)

      // context.stroke()
      context.fill()
    }
    function animate(){
      frame++;
      context.clearRect(0,0,screenWidth,screenHeight)

      drawRect();
      context.draw()
      requestAnimationFrame(animate)
    }
    animate();
    
  },
  controltap(e){
    // console.log(e)
    // controlId
    var mapScale = this.data.mapScale;
    if (e.controlId == 3){
      mapScale++;
    }else if(e.controlId == 4){
      mapScale--;
    }
    this.setData({
      mapScale:mapScale
    })
  },
  bindTimeChange(e){
    // console.log(e)
    this.setData({
      time:e.detail.value
    })
  },
  bindPickerChange(e){
    // console.log(e)
    this.setData({
      index:e.detail.value
    });
  },
  resetFn(){
    console.log("点击重置了")
  },
  checkboxChange(e){
    console.log(e)
  },
  swiperChange(e){
    console.log(e)
  },
  scrolltoupper(){
    console.log("快到头了")
  },
  scrolltolower(){
    console.log("快到底了")
  },
  scrollFn(e){
    console.log(e)
  },
  changeScrollId(){
    scrollIdIndex++;
    if (scrollIdIndex>scrollIds.length-1){
      scrollIdIndex = 0;
    }
    this.setData({
      scrollId:scrollIds[scrollIdIndex]
    })
  },
  percentAdd(){
    var percent = this.data.percent;
    percent+=10;
    this.setData({
      percent:percent
    })
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


var openBol = false;
var msg = null;
Page({
  data:{
    msgs:[]
  },
   onLoad(){
      wx.connectSocket({
        url:"ws://localhost:3001",
        success:function(){
          console.log("连接成功")
        }
      });
      wx.onSocketOpen(function(res) {
        openBol = true;
      })
      wx.onSocketMessage(res=>{
        var msgs = this.data.msgs;
        msgs.push(res.data);
        this.setData({
          msgs:msgs
        })
      })
   },
   sendFn(e){
      msg = e.detail.value;
   },
   sendSocket(){

      if (openBol){
        var that = this;
        wx.sendSocketMessage({
          data:msg,
          success:function (e){
            // console.log(e)
            var msgs = that.data.msgs;
            msgs.push(msg); 
            that.setData({
              msgs:msgs
            })
          }
        })
      }
   }
})

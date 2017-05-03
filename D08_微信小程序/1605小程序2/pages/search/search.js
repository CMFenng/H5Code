var app = getApp();
// console.log(app.globalData.name)

Page({
	data:{
		num:app.globalData.num
	},
	onReady(){
		console.log("search页渲染完成")
	},
	onLoad(){
		//返回层数
		console.log(getCurrentPages())
		console.log("search加载完成")
	},
	onPullDownRefresh(){
		console.log("触发了下拉刷新")
	},
	onShareAppMessage(){

	},
	add(){
		var num = this.data.num;
		num++;
		app.globalData.num++;
		this.setData({
			num:num
		})
	},
	back(){

		wx.navigateBack({
			delta:2
		});
	}
})
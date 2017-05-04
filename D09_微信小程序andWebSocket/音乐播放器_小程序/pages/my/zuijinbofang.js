
var data = require('../../utils/data.js').songs;
var favUtil = require('../../utils/fav.js');
var app = getApp();

Page({
	data: {
		toastHidden: true,
		currentIds:[]
	},
	onLoad: function(param) {
		

		console.log(app.currentIds);
       wx.setNavigationBarTitle({
      	title: '最近播放'
    	});
    	this.setData({
    		currentIds:app.currentIds
    	});	
	}
})
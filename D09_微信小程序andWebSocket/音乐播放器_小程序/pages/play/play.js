
var data = require('../../utils/data.js').songs;
// var data = [];
var favUtil = require('../../utils/fav.js');
var strRe = /\[(\d{2}:\d{2})\.\d{2,}\](.*)/;

Page({
	data: {
		toastHidden: true
	},
	onLoad: function(param) {
		this.setData({
			currentId: param.id,
			
		})
        
		
        

		this.idsMap = wx.getStorageSync('ids') || {};
		this.idsArr = Object.keys(this.idsMap);
        data[param.id] = data[102636799];
		for(var i in this.idsMap){
			data[i] = data[102636799];
		}
        
		if(param.singkey){
			console.log(param.singkey);
			console.log(param.id);
		   this.keyurl = 'http://route.showapi.com/213-1?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&keyword='+param.singkey+'&page=1';

		   this.idsMap[param.id] = {
            preid: param.id,
            nextid: param.id
          }
		//    this.idsMap[param.id].preid = this.idsMap[param.id];
		//    this.idsMap[param.id].nextid = this.idsMap[param.id];
	   } else {
		   this.keyurl = null;
		   this.topid = param.topid;
		//    console.log(this.topid);
	   }


	},
	onReady: function() {
		this.reload(this.data.currentId);
	},
	onShow: function() {
		this.animation = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease',
		});
	},
	onHide: function() {
		this.clearTurner();
	},
	onUnload: function() {
		this.clearTurner();
	},
	errorEvent: function(e) {
		console.log("加载资源失败 code：", e.detail.errMsg);
		// this.reload(this.idsMap[Number(this.data.currentId)].nextid);
	},
	prevEvent: function(e) {
		// console.log("pre:"+this.idsMap[Number(this.data.currentId)].preid);
		this.reload(this.idsMap[Number(this.data.currentId)].preid);
	},
	nextEvent: function(e) {
		this.reload(this.idsMap[Number(this.data.currentId)].nextid);
	},
	actionEvent: function(e) {
		var method = this.data.status === 'play' ? 'pause' : 'play';
		this.setData({
			status: method,
			action: {
				method: method
			}
		});

		if (method === 'pause') this.clearTurner();
	},
	switchModeEvent: function(e) {
		var newMode = 'loop';
		var toastMsg = "列表循环";
		if (this.data.mode === 'loop') {
			newMode = 'single';
			toastMsg = "单曲循环";
		} else if (this.data.mode === 'single') {
			newMode = 'random';
			toastMsg = "随机播放";
		}
		this.setData({
			mode: newMode,
			toastMsg: toastMsg,
			toastHidden: false
		})
	},
	switchbgEvent: function(e) {
		this.setData({
			lyricHidden: !this.data.lyricHidden
		});
	},
	favEvent: function(e) {
		if (this.data.fav === 'unlike') {
			this.setData({
				favHidden: false
			});
			return;
		}

		var id = this.data.currentId,
			fav = wx.getStorageSync('fav') || {},
			favName = fav[id],
			favlist = wx.getStorageSync('favlist') || {},
			favData = favlist[favName];

		delete fav[id];
		if (favData) {
			favData.list.splice(favData.list.indexOf(id), 1);

			if (favData.list.length) {
				favData.picurl = data[favData.list[favData.list.length - 1]].album.picUrl;
			} else {
				favData.picurl = '';
			}
		}

		wx.setStorageSync('fav', fav);
		wx.setStorageSync('favlist', favlist);

		this.setData({
			fav: 'unlike',
			favlist: favUtil.getFavList()
		});
	},
	addFavItem: function(e) {
		this.addFav(e.detail.value);
	},
	favItemTap: function(e) {
		this.addFav(e.currentTarget.dataset.name);
	},
	actionSheetChange: function(e) {
		this.setData({
			favHidden: true
		});
	},
	timeupdateEvent: function(e) {
		var t = e.detail.currentTime,
			d = e.detail.duration,
			step = this.isEnSong ? 78 : 55,
			list = this.data.lyricList,
			cIndex = this.data.currentIndex;

		if (cIndex < list.length - 1 && t >= list[cIndex + 1].time) {
			this.animation.translateY(-step * (cIndex + 1)).step();

			this.setData({
				currentTime: t,
				currentIndex: cIndex + 1,
				animationData: this.animation.export()
			});
		}

		this.setData({
			per: Math.floor(t / d * 100),
			timeText: this.formatTime(t),
			durationText: this.formatTime(d)
		});

		if (!this.turner && this.data.status === 'play') {
			this.turner = setInterval(() => {
				this.setData({
					deg: this.data.deg + 1,
				})
			}, 50);
		}
	},
	endEvent: function(e) {
		this.reload(this.getNextSongId());
	},
	toastChange: function(e) {
		this.setData({
			toastHidden: true
		});
	},
	reload: function(id) {
		var song = data[id] || {};
        
		var url = '';
        if(this.keyurl){
			url = this.keyurl;
		}else{
			url = 'http://route.showapi.com/213-4?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&topid='+this.topid;
		}
        // console.log(url);
        var that = this;
        this.ly = "";
   //================查找歌词===================
   wx.request({
      url: 'http://route.showapi.com/213-2?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&musicid='+id,
      success: function (res) {
        var json = res.data;
        
        var arrData = json["showapi_res_body"];
		// that.ly = arrData.lyric;
        // console.log(ly)

		
		function strNumDiscode(str){
    str = str.replace(/&#58;/g, ':');
    str = str.replace(/&#46;/g, '.');
    str = str.replace(/&#32;/g, ' ');
    str = str.replace(/&#10;/g, '\n');
	str = str.replace(/&#45;/g, '-');
	     return str;
		}
        
		that.ly = strNumDiscode(arrData.lyric);
		// console.log(that.ly);
        

		var ob = {
			zh : that.ly
		};

        that.setData({
			lyricList: that.getLyricList(ob)
		});

        


      },
      fail: function () {
        console.log(请求失败);
      }
    });





    //================查找歌曲===================
    wx.request({
      url: url,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var json = res.data;
        
        var arrData = json["showapi_res_body"];
        // console.log(arrData)

		var songs = [];
		if(that.keyurl){
			songs = arrData.pagebean.contentlist;
		}else{
			songs = arrData.pagebean.songlist;
		}
        // var songs = arrData.pagebean.songlist;
        // console.log("songs:"+songs);
        for(var i in songs){
			
			if(id == songs[i].songid){
				console.log("找到：");
				
				  if(songs[i].url){
					  song.mp3Url = songs[i].url;
				  }else{
					  song.mp3Url = songs[i].m4a;
				  }
                  console.log(song.mp3Url);
				  song.artists = songs[i].singername;
				  song.name = songs[i].songname;
				//   song.zh = that.ly;
				  song.en = "";
				  song.album.picUrl = songs[i].albumpic_big;
				  song.album.name = songs[i].albumname;
			}

        }


		that.clearTurner();
		that.animation.translateY(0).step({
			duration: 1000,
			delay: 100
		});
		that.setData({
			per: 0,
			deg: 0,
			status: 'play',
			lyricHidden: true,
			toastHidden: true,
			favHidden: true,
			fav: wx.getStorageSync('fav')[id] ? 'liked' : 'unlike',
			mode: that.data.mode || 'loop',
			currentId: id,
			currentTime: '0',
			currentIndex: -1,
			timeText: '00:00',
			durationText: '',
			animationData: that.animation.export(),
			title: song.name,
			picurl: song.album.picUrl,
			src: song.mp3Url,
			action: {
				method: 'setCurrentTime',
				data: 0
			},
			// lyricList: that.getLyricList(song),
			favlist: favUtil.getFavList()
		});

		wx.setNavigationBarTitle({
			title: song.name
		});

		setTimeout(() => {
			that.setData({
				action: {
					method: 'play'
				}
			})
		}, 100);


      },
      fail: function () {
        console.log(请求失败);
      }
    });
 


    


	},
	getNextSongId: function() {
		if (this.data.mode === 'single') {
			return this.data.currentId;
		} else if (this.data.mode === 'random') {
			return idsArr[Math.floor(Math.random() * idsArr.length)]
		} else if (this.data.mode === 'loop') {
			return this.idsMap[Number(this.data.currentId)].nextid;
		}
	},
	getLyricList: function(song) {
		var obj = {},
			lyricList = [],
			zh = song.zh ? song.zh.split('\n') : [],
			en = song.en ? song.en.split('\n') : [];

		zh.forEach(function(str) {
			var arr = str.match(strRe);
			if (!arr) return;

			var k = arr[1],
				v = arr[2] || '(music)';

			if (!obj[k]) obj[k] = {};
			obj[k].zh = v;
		});
		if (en.length) {
			this.isEnSong = true;
		} else {
			this.isEnSong = false;
		}

		en.forEach(function(str) {
			var arr = str.match(strRe);
			if (!arr) return;

			var k = arr[1],
				v = arr[2] || '(music)';

			if (!obj[k]) obj[k] = {};
			obj[k].en = v;
		});

		for (var t in obj) {
			var ts = t.split(':');
			var time = parseInt(ts[0]) * 60 + parseInt(ts[1]);

			if (lyricList.length) {
				lyricList[lyricList.length - 1].endtime = time;
			}

			lyricList.push({
				time: time,
				zh: obj[t].zh,
				en: obj[t].en
			});
		}

		return lyricList;
	},
	clearTurner: function() {
		if (this.turner) {
			clearInterval(this.turner);
			this.turner = null;
		}
	},
	addFav: function(favName) {
		if (!favName) {
			return;
		}

		var id = this.data.currentId,
			fav = wx.getStorageSync('fav') || {},
			favlist = wx.getStorageSync('favlist') || {};

		fav[id] = favName;
		if (!favlist[favName]) favlist[favName] = {
			picurl: '',
			list: []
		}

		var favData = favlist[favName];
		favData.picurl = data[id].album.picUrl;
		favData.list.push(id);

		wx.setStorageSync('fav', fav);
		wx.setStorageSync('favlist', favlist);

		this.setData({
			fav: 'liked',
			toastMsg: '收藏成功',
			toastHidden: false,
			favHidden: true,
			favlist: favUtil.getFavList()
		});
	},
	formatTime: function(time) {
		time = Math.floor(time);
		var m = Math.floor(time / 60).toString();
		m = m.length < 2 ? '0' + m : m;

		var s = (time - parseInt(m) * 60).toString();
		s = s.length < 2 ? '0' + s : s;

		return `${m}:${s}`;
	}
})
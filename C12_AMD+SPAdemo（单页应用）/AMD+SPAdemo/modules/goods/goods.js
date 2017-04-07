define(['text!./goods.html', '$css!./goods.css'], function (html) {
	//返回上一级
	function backFn () {
		window.history.back();
	}
	
	//假数据（模拟从某个模块中生成的，下面的getGoodsList方法返回这个数据）
	var goods = [
		{ goodsId : 1001, goodsName : '商品1' },
		{ goodsId : 1002, goodsName : '商品2' },
		{ goodsId : 1003, goodsName : '商品3' },
		{ goodsId : 1004, goodsName : '商品4' }
	]
	
	return {
		render : function (goodsStr) {
			$('#container').html(html);
			
			var goodsObj = JSON.parse(goodsStr);
			$('#goods .goodsIdSpan').html(goodsObj.goodsId);
			$('#goods .goodsNameSpan').html(goodsObj.goodsName);
			
			//给返回按钮绑定单击事件
			$('#goods .backBtn').on('click', backFn);
		},
		render1 : function (goodsId) {
			$('#container').html(html);
			
			console.log(goodsId);
			//查询该goodId对应的商品对象
			var goodsObj = this.getGoodsDetail(goodsId);
			$('#goods .goodsIdSpan').html(goodsObj.goodsId);
			$('#goods .goodsNameSpan').html(goodsObj.goodsName);
			
			//给返回按钮绑定单击事件
			$('#goods .backBtn').on('click', backFn);
		},
		//生成数据列表(模拟将来网络请求的数据列表)
		getGoodsList : function () {
			return goods;
		},
		//获取单个商品详情信息（模拟将来网络请求的商品详情信息）
		//通过商品的唯一标识来查询该商品的详情信息（goodsId）
		getGoodsDetail : function (goodsId) {
			for (var tempGoods of goods) {
				if (tempGoods.goodsId == goodsId) {
					return tempGoods;
				}
			}
		}
	}
})
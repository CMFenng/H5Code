define(['text!./home.html', '$css!./home.css', 'template', 'lazyload'], function (html) {
	
	//普通方式解析数据（轮播图和菜单项）
	function getSlideAndMenuData () {
		$.getJSON('http://h5.yztctech.net/api/axf/apihome.php', null, 
			function (resultData) {
				console.log(resultData);
				//轮播图数据数组
				var slideArr = resultData.data.slide;
				
				for (var tempSlide of slideArr) {
					$('<a href="###" class="swiper-slide"><img src="' + 
						tempSlide.activity.img + '"/></a>')
						.appendTo('#banner .swiper-wrapper');
				}
				
				var swiper = new Swiper("#banner",{
					pagination:"#banner_pagination",
					autoplay:2000,
					autoplayDisabledOnInteraction: false,
					loop : true
				})
				
				//菜单项数据数组
				var menuArr = resultData.data.menu;
				
				for (var tempMenu of menuArr) {
					$('<a href="###"><img src="' + 
						tempMenu.activity.img + 
						'" alt="" /><p>' + tempMenu.activity.name + 
						'</p></a>').appendTo('#nav .content_container');
				}
			})
	}
	
	//ES6 轮播图 和 菜单项
	function getSlideAndMenuDataByES6 () {
		$.getJSON('http://h5.yztctech.net/api/axf/apihome.php', null, 
			function (resultData) {
				//轮播图
				var slideArr = resultData.data.slide;
				
				//ES6字符串
				var str = ``;
				
				for (var tempSlide of slideArr) {
					str += `<a href="###" class="swiper-slide">
								<img src="${ tempSlide.activity.img }"/>
							</a>`;
				}
				
				$('#banner .swiper-wrapper').html(str);
				
				var swiper = new Swiper("#banner",{
					pagination:"#banner_pagination",
					autoplay:2000,
					autoplayDisabledOnInteraction: false,
					loop : true
				})
				
				
				//菜单项
				var menuArr = resultData.data.menu;
				
				str = ``;
				
				for (var tempMenu of menuArr) {
					str += `<a href="###">
								<img src="${ tempMenu.activity.img }" alt="" />
								<p>${ tempMenu.activity.name }</p>
							</a>`
				}
				
				$('#nav .content_container').html(str);
			})
	}
	//百度模板 轮播图 和 菜单项
	function getSlideAndMenuDataByTpl () {
		$.getJSON('http://h5.yztctech.net/api/axf/apihome.php', null, 
			function (resultData) {
				
				//使用百度模板
				var str = baidu.template('slideTpl', resultData.data);
				
				$('#banner .swiper-wrapper').html(str);
				
				var swiper = new Swiper("#banner",{
					pagination:"#banner_pagination",
					autoplay:2000,
					autoplayDisabledOnInteraction: false,
					loop : true
				})
				
				
				//菜单项
				str = baidu.template('menuTpl', resultData.data);			
					
				$('#nav .content_container').html(str);
			})
	}
	
	//ES6 首页热卖数据
	function getHotDataByES6 () {
		$.getJSON('http://h5.yztctech.net/api/axf/apihomehot.php', null, 
			function (resultData) {
				var str = ``;
				for (var tempHot of resultData.data) {
					str += `<a href="###" class="hot_content_item">
								<img data-original="${ tempHot.img }" alt="" />
								<p class="title">${ tempHot.name }</p>
								<p>
									<span class="best">精选</span>
									<span class="maizeng">${ tempHot.pm_desc }</span>
								</p>
								<p class="weight">${ tempHot.specifics }</p>
								<p class="price_container">
									<span class="now_price">￥${ tempHot.price }</span>
									<span class="original_price">￥${ tempHot.market_price }</span>
								</p>
								<span class="add">+</span>
							</a>`;
				}
				
				$('#hot_content').html(str);
				console.log($('#hot_content img'));
				console.log($('#hot_content img').lazyload());
				//懒加载, 注意:img 不要设置src属性, 把数据存储在data-original属性中
				$('#hot_content img').lazyload({
					effect : 'fadeIn'
				})
				
			})
	}
	
	
	return {
		//渲染页面的方法
		render : function () {
			$('#container').html(html);
			
			//请求轮播图数据和菜单项数据
//			getSlideAndMenuData();
//			getSlideAndMenuDataByES6();
			getSlideAndMenuDataByTpl();
			
			//请求首页热卖数据
			getHotDataByES6();
			
		},
		
	}
})
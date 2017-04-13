//这里用到了angularJS的ui-router路由模块和css模块
angular.module('myApp', ['ui.router', 'angularCSS'])
// run方法，是在整个模块加载的时候，进行初始化设置一些功能使用的
	.run(['$window', '$rootScope', function ($window, $rootScope) {
		//在这里监听全局的浏览器地址的变化
		//$locationChangeSuccess 当浏览器发生变化的时候会触发这个事件
		$rootScope.$on('$locationChangeSuccess', function () {
			if ($window.location.href.indexOf('userDetail') != -1) {
				//当浏览器地址包含userDetail的时候 隐藏footer
				$rootScope.rootIsShowFooter = false;
			} else {
				$rootScope.rootIsShowFooter = true;
			}
		})
	}])
//在config方法里进行ui-router路由的配置
//配置ui-router路由依赖于$stateProvider服务 和 $urlRouterProvider服务，
//通过依赖注入来使用
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			//state管理的是一个状态，用来识别父子路由用的。
			//注意 home 不是 锚点值，如果它有二级路由，那么是二级路由的父亲状态标识。
			.state('home', {
				//这个是锚点值
				url : '/home',
				templateUrl : './view/home.html',
				controller : 'HomeCtrl as homeCtrl'
			})
			.state('market', {
				//name 和 age 是传过来的参数，这里表示形参
				url : '/market/:name/:age',
				templateUrl : './view/market.html',
				controller : 'MarketCtrl'
			})
			.state('cart', {
				url : '/cart',
				templateUrl : './view/cart.html',
				controller : 'CartCtrl'
			})
			.state('mine', {
				url : '/mine',				
				templateUrl : './view/mine.html',
				controller : 'MineCtrl'
			})
			//配置mine的二级路由
			/*
			 * mine.mineSubPage01中的 mine 是父级路由的状态名字，mineSubPage01是
			 * 自己的状态名字，注意：mine不能乱写，一定要写父级的名字
			 */
			.state('mine.mineSubPage01', {
				url : '/mineSubPage01',
				views : {
					/*
					 * upView@mine 是通过名字能区分要切换的容器
					 */
					'upView@mine' : {
						templateUrl : './view/mineSubPage01.html'
					},
					//一个路由可以同时切换不同容器内容
					'downView@mine' : {
						templateUrl : './view/mineSubPage02.html'
					}
				}
			})
			.state('mine.mineSubPage02', {
				url : '/mineSubPage02',
				views : {
					/*
					 * upView@mine 是通过名字能区分要切换的容器
					 */
					'upView@mine' : {
						templateUrl : './view/mineSubPage02.html'
					}
				}
			})
			.state('mine.mineSubPage03', {
				url : '/mineSubPage03',
				views : {
					/*
					 * upView@mine 是通过名字能区分要切换的容器
					 */
					'upView@mine' : {
						templateUrl : './view/mineSubPage03.html'
					}
				}
			})
			.state('userDetail', {
				url : '/userDetail/:userId',
				templateUrl : './view/userDetail.html',
				controller : 'UserDetailCtrl'
			})
			//其他
		$urlRouterProvider.otherwise('/home');
	}])
	





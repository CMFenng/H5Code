//注意：在控制器文件中，不要加入 [] 代码，否则会报错 
angular.module('myApp')
	.controller('HomeCtrl', ['$scope', '$css', 'UserService', 
		function ($scope, $css, UserService) {
			$scope.pageName = '首页';
			//$css是angularCSS模块中的一个服务，用来加载CSS文件
			$css.add('./css/home.css');
			//测试别名方式是否生效
			var self = this;
			self.asPageName = '别名-首页';
			
			//显示用户列表
			$scope.userList = UserService.getUserList();
		
	}])
	//利用$routeParams这个服务，来获得传递的参数
	.controller('MarketCtrl', ['$scope', '$css', '$routeParams',
		function ($scope, $css, $routeParams) {
			$scope.pageName = '闪送超市';
			$css.add('./css/market.css');
			
			$scope.person = {
				// 传递过来的name 和 age ，直接使用$routeParams获取即可
				name : $routeParams.name,
				age : $routeParams.age
			}
	}])
	.controller('CartCtrl', ['$scope', '$css', function ($scope, $css) {
		$scope.pageName = '购物车';
		$css.add('./css/cart.css');
	}])
	.controller('MineCtrl', ['$scope', '$css', function ($scope, $css) {
		$scope.pageName = '我的';
		$css.add('./css/mine.css');
	}])
	.controller('UserDetailCtrl', ['$scope', '$css', '$routeParams', '$window', '$location', 'UserService',
		function ($scope, $css, $routeParams, $window, $location, UserService) {
			$scope.pageName = '用户信息详情';
			$css.add('./css/userDetail.css');
			
			//获取个人相信信息（去调用UserService服务中接口）
			$scope.user = UserService.getUserInfDetail($routeParams.userId);
		
			//返回方法
			$scope.backFn = function () {
				$window.history.back();
				//跳转到某一个路由
//				$location.path('/cart');
				console.log($location);
			}
	}])

// 注意：在控制器文件中，不要加入 [] 代码，否则会报错
angular.module('myApp')
    .controller('HomeCtrl', ['$scope', '$css', 'UserService',
        function ($scope, $css, UserService) {
            $scope.pageName = '首页';
            // $css 是 angularCSS 模块中的一个服务，用来加载 CSS 文件
            $css.add('./css/home.css');
            // 测试别名方式是否生效
            var self = this;
            self.asPageName = '别名-首页';
            
            // 显示用户列表
            $scope.userList = UserService.getUserList();
    }])
    // 利用 $stateParams 这个服务，来获得传递的参数
    .controller('MarketCtrl', ['$scope', '$css', '$stateParams',
        function ($scope, $css, $stateParams) {
            $scope.pageName = '闪送超市';
            $css.add('./css/market.css');
            
            $scope.person = {
                // 传递过来的 name 和 age，直接使用 $stateParams 获取即可
                name : $stateParams.name,
                age : $stateParams.age
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
    .controller('UserDetailCtrl', ['$scope', '$css', '$stateParams', '$window', '$location', '$state', 'UserService',
        function ($scope, $css, $stateParams, $window, $location, $state, UserService) {
            $scope.pageName = '用户详情信息';
            $css.add('./css/userDetail.css');
            
            // 获取个人详情信息（去调用 UserService 服务中接口）
            $scope.user = UserService.getUserInfoDetail($stateParams.userId);
            
            // 返回方法
            $scope.backFn = function () {
//              $window.history.back();
                // 跳转到某一个路由
//              $location.path('/cart');
//              console.log($location);
                $state.go('home');
            }
    }])

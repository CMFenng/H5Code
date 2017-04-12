// 这里用到了 angularJS 的原生路由模块和 css 模块
angular.module('myApp', ['ngRoute', 'angularCSS'])
    // run 方法，是在整个模块加载的时候，进行初始化设置一些功能使用的
    .run(['$window', '$rootScope', function ($window, $rootScope) {
        // 在这里监听全局的浏览器地址的变化
        // $locationChangeSuccess 当浏览器发生变化的时候会触发这个事件
        $rootScope.$on('$locationChangeSuccess', function () {
            if ($window.location.href.indexOf('userDetail') != -1) {
                // 当浏览器地址包含 userDetail 的时候，隐藏 footer
                $rootScope.rootIsShowFooter = false;
            } else {
                $rootScope.rootIsShowFooter = true;
            }
        })
    }])
    // 在 config 方法里进行路由的配置
    // 配置路由依赖于 $routeProvider 服务，通过依赖注入来使用
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
//              template : '<h1>首页</h1>'
                templateUrl : './view/home.html',
                // 给当前这个 view 配置一个控制器（自动就会管理，不需要在 view 上写 ng-controller）
                // 如果想使用别名方式定义控制器，可以加入 as 别名即可
                controller : 'HomeCtrl as homeCtrl'
            })
            // name 和 age 是传过来的参数，这里表示形参
            .when('/market/:name/:age', {
//              template : '<h1>闪送超市</h1>'
                templateUrl : './view/market.html',
                controller : 'MarketCtrl'
            })
            .when('/cart', {
//              template : '<h1>购物车</h1>'
                templateUrl : './view/cart.html',
                controller : 'CartCtrl'
            })
            .when('/mine', {
//              template : '<h1>我的</h1>'
                templateUrl : './view/mine.html',
                controller : 'MineCtrl'
            })
            .when('/userDetail/:userId', {
                templateUrl : './view/userDetail.html',
                controller : 'UserDetailCtrl'
            })
            // 其他，重定向到首页
            .otherwise({
                redirectTo : '/home'
            })
    }])

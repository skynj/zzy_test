var uiRouter1=angular.module('uiRouter1',['ui.router']);//声明AngularJS模块, 并把ui-router传入AngularJS主模块，所有的结合起来我们就得到了Angular模块
uiRouter1.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){ //声明了把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了
	$stateProvider
		.state('facebook',{
			url:'/facebook',
			templateUrl:'facebook.html'
		})
		.state('twitter',{
			url:'/twitter',
			templateUrl:'twitter.html'
		})
		.state('sina',{
			url:'/sina',
			templateUrl:'sina.html'
		})
		.state('blogger',{
			url:'/blogger',
			templateUrl:'blogger.html'
		});
	$urlRouterProvider.otherwise('/facebook');
}]);
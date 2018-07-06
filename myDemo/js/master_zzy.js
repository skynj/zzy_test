var uiRouter=angular.module('uiRouter',['ui.router']);
uiRouter.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('link1',{
            url:'/link1',
            templateUrl:'link1.html'
        })
        .state('link2',{
            url:'/link2',
            templateUrl:'link2.html'
        })
        .state('link3',{
            url:'/link3',
            templateUrl:'link3.html'
        })
        .state('link4',{
            url:'/link4',
            template:'<div>link4</div>'
        })
    $urlRouterProvider.otherwise('/link1');
}])
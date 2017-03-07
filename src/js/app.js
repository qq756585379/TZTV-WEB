;(function(angular) {
    'use strict';
    angular.module('tztvApp', [
        'ngRoute',
        'tztvApp.directives'
    ]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main',{
            templateUrl: '../src/view/view1/view.html',
            controller: 'HomeController'
        }).when('/category',{
            templateUrl: '../src/view/view2/view.html',
            controller: 'CategoryController'
        }).when('/show',{
            templateUrl: '../src/view/view3/view.html',
            controller: 'ShowController'
        }).when('/shopcart',{
            templateUrl: '../src/view/view4/view.html',
            controller: 'ShopCartController'
        }).when('/userInfo',{
            templateUrl: '../src/view/view5/view.html',
            controller: 'UserInfoController'
        }).otherwise({ redirectTo: '/main' });
        // .otherwise('/job');
    }]).controller('HomeController',['$scope',function($scope){

    }]).controller('CategoryController',['$scope',function($scope){

    }]).controller('ShowController',['$scope',function($scope){

    }]).controller('ShopCartController',['$scope',function($scope){

    }]).controller('UserInfoController',['$scope',function($scope){

    }]);
})(angular);

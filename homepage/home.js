(function (angular) {
    var app = angular.module('homepage', ['ngRoute'])
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home_page', {
            templateUrl:'../homepage/home.html',
            controller: 'homepageCtrl'
        }).otherwise({
            redirectTo:'/home_page'
        })
    }]);
    app.controller('homepageCtrl', ['$scope', function ($scope) {
        console.log('主页加载了')
    }])

})(angular)
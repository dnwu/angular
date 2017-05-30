(function (angular) {
    var app = angular.module('movelist',['ngRoute','myService'])
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page?',{
            templateUrl:'../moveList/moveList.html',
            controller:'movelistCtrl'
        })
    }])
    app.controller('movelistCtrl',['myservice','$scope','$routeParams','$http','$route',
        function (myservice,$scope,$routeParams,$http,$route) {
        //   https://api.douban.com/
        //   /v2/movie/in_theaters
        //console.log('热门加载了.....',$routeParams)
        //$http.jsonp('http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK&ID=108288', {jsonpCallbackParam: 'callback'}).success(function (data) {
        //})

        var page = $routeParams.page;
        page = (page - 0) || 1
        $scope.count = 10; // 每页 的数据
        $scope.page = page;
        myservice.myjsonp('http://api.douban.com/v2/movie/'+$routeParams.category,{
            start: ($scope.page - 1)*$scope.count , count:  $scope.count,q:$routeParams.q
        }, function (data) {
            //console.log(data)
            $scope.list=data;
            $scope.total=data.total;
            $scope.totalPage = Math.ceil(data.total/$scope.count)
            $scope.$apply();

        });
        $scope.pre= function () {
            $scope.page = $scope.page-1;
            $route.updateParams({
                page:$scope.page
            })
        };
        $scope.next= function () {
            $scope.page = $scope.page+1;
            $route.updateParams({
                page:$scope.page
            })
        }

    }])
})(angular)
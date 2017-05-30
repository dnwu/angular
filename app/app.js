(function (angular) {
    "use strict";

    // start your ride
    var app=angular.module('moviecat',['homepage','movelist','subject','autoActive'])
    app.controller('mainController',['$scope','$location',function($scope,$location){
        //console.log('加载了')
        $scope.search= function () {
            if(!$scope.query){
                return;
            }
            $location.url('/search?q='+$scope.query)
        }
    }])

})(angular);
/**
 * Created by pc on 2017/05/30.
 */
(function (angular) {
    var app=angular.module('subject',["ngRoute"])
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie/subject/:id',{
            templateUrl:'../subject/subject.html',
            controller:'detailsCtrl'
        })
    }]);
    app.controller('detailsCtrl',['$scope','$routeParams','myservice', function ($scope,$routeParams,myservice) {
        //console.log($routeParams)
        myservice.myjsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{}, function (data) {
            //console.log(data)
            $scope.data=data;
            $scope.$apply();
        })
    }])
    //定义一个过滤器,让导演和主演对象按照字符串输出
    app.filter('myFilter',[function () {
        return function (target,obj) {
            var str=""
            for(var index in target){
                str+=target[index].name+","
            }
            str=str.substr(0,str.length-1)
            return str;
        }
    }])
})(angular)

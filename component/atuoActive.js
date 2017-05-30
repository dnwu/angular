/**
 * Created by pc on 2017/05/30.
 */
(function (angular) {
    var app = angular.module('autoActive',[])
    app.directive('autoClass',['$location',function ($location) {
        return {
            restrict:'ECMA',
            link: function (scope,element,attr) {
                //console.log(attr)
                scope.location=$location
                scope.$watch('location.url()',function(newUrl){
                    var aLink = element.children().attr('href');//获得a链接href属性
                    //console.log(aLink)
                    //console.log(newUrl)
                    if(aLink.indexOf(newUrl)>-1){
                        element.parent().children().removeClass(attr.autoClass);//移动兄弟的样式
                        element.addClass(attr.autoClass)
                    }
                })
            }
        }
    }])
})(angular)

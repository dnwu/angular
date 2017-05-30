/**
 * Created by pc on 2017/05/28.
 */
(function (angular) {
    var app = angular.module('myService',[])
    app.service('myservice',[function () {
        this.myjsonp= function (url,params,callback) {
            var pathUrl ='?'
            for(var key in params){
                pathUrl +=key+"="+params[key]+'&'
            }
            var url = url + pathUrl;
            //定义一个随机名字的callback函数
            var mycallback = 'callback_'+Math.random().toString().substr(4);
            //当浏览器发送这个请求后,就会以JSONP协议来发送,后台检测到callback这个属性后,就会,把数据作为callback 的参数返回
            //callback(result)
            url = url + 'callback=' + mycallback
            //然后callback 就携带者带有参数的函数赋值给在window对象的Mycallback,供调用
            window[mycallback]= callback;

            var script = document.createElement("script")
            script.src=url;

            document.body.appendChild(script);
        }
    }])
})(angular)
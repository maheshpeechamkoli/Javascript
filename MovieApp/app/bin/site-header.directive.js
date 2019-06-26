(function(){
    
    var directive={
        restrict:'AE',
        replace:false,
        template:'<h1 class="text-shadow">Welcome</h1>'
    };

    angular
        .module('movie-app')
        .directive('welcome',function(){
            return directive;
        });
})();
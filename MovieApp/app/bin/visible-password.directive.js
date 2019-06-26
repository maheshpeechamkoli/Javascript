(function(){
    var directive={
        restrict:'E',
        template:'<input type="password" ng-model="pass" />{{pass}}',
        scope:{
            //pass:'=pass'
            pass:'@'
        } //this directive has its own scope
    };

    angular
        .module('movie-app')
        .directive('visiblePassword',function(){
            return directive;
        });


})();
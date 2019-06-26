(function(){
    var directive={
        restrict:'E',
        replace:true,
        templateUrl:'/app/templates/movie-cell.html'
    };

    angular.module('movie-app')
        .directive('movieInfo',function(){
            return directive;
        });

})();
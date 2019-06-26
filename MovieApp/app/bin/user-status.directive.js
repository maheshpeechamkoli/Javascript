(function(){
    

    angular
        .module('movie-app')
        .directive('userStatus',function(){
            return {
                restrict:'E',
                templateUrl: '/app/templates/user-status.html'
            };
        });

})();
(function(){
    function MovieAddController($scope){

        $scope.addMovie=function(movie){
            console.log('movie added',movie);
        };
    }

    angular
        .module('movie-app')
        .controller('MovieAddController',MovieAddController);


})();
(function(){
    
    function NotFoundController($scope,$route,$routeParams){

        var type=$routeParams.type;
        var id=$routeParams.id;
        console.log($route);

        if(!type || !id)
            $scope.message='The URL is invalid :';
        else
            $scope.message='Sorry No Movie with imdbId '+id+' available on our server. We will inform the admin';


    }

    angular
        .module('movie-app')
        .controller('NotFoundController',NotFoundController);

})();
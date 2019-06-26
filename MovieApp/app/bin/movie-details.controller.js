(function(){

    function MovieDetails($scope,MovieService,$location,$routeParams,$route){

        init();

        function r(min,max){
            var n= Math.random()*(max-min)+min;
            return Math.floor(n);
        }

        function init(){

            console.log('$routeParams',$routeParams);
            console.log('$route',$route); //contains routeParams

            //var id=$routeParams.imdbId;
            var id=$route.current.pathParams.imdbId;

            //var size=$routeParams.size;
            var size=$route.current.params.size||'50';
            $scope.posterSize=size+"%";
           // var movie=MovieService.getMovieById(id);

            MovieService.getMovieById(id)
                        .then(function(movie){
                            movie.releaseDate=new Date(r(1933,2017),r(1,12),r(1,25));
                            movie.budget=r(1000,5000)*1000;
                            movie.rating=movie.imdbRating/2;
                            
                            $scope.movie=movie;
                        })
                        .catch(function(error){
                            $location.url('/404?type=details&id='+id);
                        });

        }

    }

    angular
        .module('movie-app')
        .controller('MovieDetailsController',MovieDetails);


})();
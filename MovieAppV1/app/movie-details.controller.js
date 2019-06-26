(function(){
    function MovieDetails($scope){

        $scope.movie={
            "Title": "Harry Potter and the Deathly Hallows: Part 2",
            "Year": "2011",
            "imdbID": "tt1201607",
            "Type": "movie",
            "Poster": "/images/tt1201607.jpg",
            "imdbRating": "8.1"
        };

    }

    angular
        .module('movie-app')
        .controller('MovieDetailsController',MovieDetails);


})();
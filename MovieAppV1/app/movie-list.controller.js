(function(){

    function MovieListController($scope,MovieService){

        var movieService=MovieService;
        init();

        function init(){
            $scope.title='Best Movies';
            $scope.imageSize=25;
            $scope.changeSize=function(delta){
                console.log('changing to', $scope.imageSize+delta);
                var newSize=$scope.imageSize+delta;
                if(newSize<10)
                    newSize=10;
                if(newSize>100)
                    newSize=100;
    
                $scope.imageSize=newSize;
            };

            $scope.movies=movieService.getAllMovies();
        }

        function _init(){
            $scope.title='Best Movies';
            $scope.imageSize=25;
            $scope.changeSize=function(delta){
                console.log('changing to', $scope.imageSize+delta);
                var newSize=$scope.imageSize+delta;
                if(newSize<10)
                    newSize=10;
                if(newSize>100)
                    newSize=100;
    
                $scope.imageSize=newSize;
            };
            $scope.movies=[
                {
                    "Title": "Harry Potter and the Deathly Hallows: Part 2",
                    "Year": "2011",
                    "imdbID": "tt1201607",
                    "Type": "movie",
                    "Poster": "/images/tt1201607.jpg",
                    "imdbRating": "8.1"
                },
                {
                    "Title": "Harry Potter and the Sorcerer's Stone",
                    "Year": "2001",
                    "imdbID": "tt0241527",
                    "Type": "movie",
                    "Poster": "/images/tt0241527.jpg",
                    "imdbRating": "7.5"
                },
                {
                    "Title": "Harry Potter and the Chamber of Secrets",
                    "Year": "2002",
                    "imdbID": "tt0295297",
                    "Type": "movie",
                    "Poster": "/images/tt0295297.jpg",
                    "imdbRating": "7.4"
                },
                {
                    "Title": "Harry Potter and the Goblet of Fire",
                    "Year": "2005",
                    "imdbID": "tt0330373",
                    "Type": "movie",
                    "Poster": "/images/tt0330373.jpg",
                    "imdbRating": "7.7"
                }
            ];
        }

    }

    angular
        .module('movie-app')
        .controller('MovieListController',MovieListController);
})();
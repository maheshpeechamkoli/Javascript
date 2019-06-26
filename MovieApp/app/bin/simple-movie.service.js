var SimpleMovieService=(function(){
    function SimpleMovieService(){
        
                var movies=[
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
                    },
                    {
                        "Title": "Harry Potter and the Prisoner of Azkaban",
                        "Year": "2004",
                        "imdbID": "tt0304141",
                        "Type": "movie",
                        "Poster": "/images/tt0304141.jpg",
                        "imdbRating": "7.8"
                    },
                    {
                        "Title": "Harry Potter and the Order of the Phoenix",
                        "Year": "2007",
                        "imdbID": "tt0373889",
                        "Type": "movie",
                        "Poster": "/images/tt0373889.jpg",
                        "imdbRating": "7.5"
                    },
                    {
                        "Title": "Harry Potter and the Deathly Hallows: Part 1",
                        "Year": "2010",
                        "imdbID": "tt0926084",
                        "Type": "movie",
                        "Poster": "/images/tt0926084.jpg",
                        "imdbRating": "7.7"
                    },
                    {
                        "Title": "Harry Potter and the Half-Blood Prince",
                        "Year": "2009",
                        "imdbID": "tt0417741",
                        "Type": "movie",
                        "Poster": "/images/tt0417741.jpg",
                        "imdbRating": "7.5"
                    },
                    {
                        "Title": "Star Wars: Episode IV - A New Hope",
                        "Year": "1977",
                        "imdbID": "tt0076759",
                        "Type": "movie",
                        "Poster": "/images/tt0076759.jpg",
                        "imdbRating": "8.7"
                    },
                    {
                        "Title": "Star Wars: Episode V - The Empire Strikes Back",
                        "Year": "1980",
                        "imdbID": "tt0080684",
                        "Type": "movie",
                        "Poster": "/images/tt0080684.jpg",
                        "imdbRating": "8.8"
                    },
                    {
                        "Title": "Star Wars: Episode VI - Return of the Jedi",
                        "Year": "1983",
                        "imdbID": "tt0086190",
                        "Type": "movie",
                        "Poster": "/images/tt0086190.jpg",
                        "imdbRating": "8.4"
                    },
                    {
                        "Title": "Star Wars: The Force Awakens",
                        "Year": "2015",
                        "imdbID": "tt2488496",
                        "Type": "movie",
                        "Poster": "/images/tt2488496.jpg",
                        "imdbRating": "8.1"
                    }
                ];
        
                this.getAllMovies=function(){
                    return movies;
                };
        
                this.getMovieById=function(imdbId){
                    for(i=0;i<movies.length;i++){
                        if(movies[i].imdbID==imdbId)
                            return movies[i];
                    }
                    return null;
                }
        
                function validate(movie){
                    var error={};
                    var errors=0;
                    if(!movie.imdbID){
                        error.ImdbId="ImdbId not provided";
                        errors++;
                    }
                    if(!movie.Title){
                        error.Title="Title Not provided";
                        errors++;
                    }
                    if(!errors)
                        return null;
                    else
                        return error;
                }
        
                this.addMovie=function(movie){
                    var error=validate(movie);
                   if(!error)
                       movies.push(movie);
                      
                    return error;
                }
        
        
            }

    return SimpleMovieService;
        
})();

(function(){
    
   
    angular
        .module('movie-app')
        .service('MovieService',SimpleMovieService);

})();
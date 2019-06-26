(function(){

    function serviceFactory($http,$q){

        var baseUrl='http://api.conceptarchitect.in/api/';

        function errorLogger(resp){
            console.log('http error',resp);
        }

        function getAllMovies(fnSuccess,fnFailure){
            var url=baseUrl+'movies';
            
            fnFailure=fnFailure|| errorLogger;

            $http.get(url)
                 .then(fnSuccess,fnFailure);
        }

        
        function getMovieById(id,fnSuccess,fnFailure){
            var url=baseUrl+'movie/'+id;
            //create an object that will be used later
            var deffered= $q.defer();

            $http.get(url)
                .then(
                    function(success){
                        //if success return data
                        deffered.resolve(success.data);
                    },

                    function error(error){
                        //if failed complain with relevent error details
                        deffered.reject({code:error.status, message:error.statusText});
                    }
                );

            return deffered.promise;

        }

        return{
         
            getAllMovies:getAllMovies,
            getMovieById:getMovieById

        };
    }


    angular
        .module('movie-app')
        .factory('MovieService',serviceFactory)
})();
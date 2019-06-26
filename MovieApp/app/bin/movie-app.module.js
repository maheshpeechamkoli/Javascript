(function(){

    var app=angular
                .module('movie-app',[
                    'ngRoute',
                    'ca-utils'

                ]);
    
    app.config(configureApp);



    function configureApp($routeProvider,$locationProvider){

        

        $routeProvider.when('/movies',{
            templateUrl:'/app/templates/movie-list.html',
            controller:'MovieListController'
        });

        $routeProvider.when('/movie/add',{
            templateUrl:'/app/templates/movie-add.html',
            controller:'MovieAddController'
        });

        $routeProvider.when('/movie/details/:imdbId',{
            templateUrl:'/app/templates/movie-details.html',
            controller:'MovieDetailsController'
        });

        $routeProvider.when('/404',{
            templateUrl:'/app/templates/404.html',
            controller:'NotFoundController'
        });

        $routeProvider.otherwise({
            redirectTo:'/404'
        });

        //$locationProvider.html5Mode(true);
        
        // $routeProvider.when('/',{
        //     redirectTo: '/movies'
        // });


    };

    
    

})();
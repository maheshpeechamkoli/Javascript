(function () {
    angular
        .module('movie-app')
        .directive('uniqueImdbId', function ($q, MovieService) {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ctrl) {


                    ctrl.$asyncValidators.uniqueImdbId = function (modelValue, viewValue) {

                        if (ctrl.$isEmpty(modelValue)) {
                            // consider empty model valid
                            return $q.resolve();
                        }

                        var d=$q.defer();


                        MovieService.getMovieById(viewValue)
                            .then(function(){
                                d.reject();
                            })
                            .catch(function(){
                                d.resolve();
                            });

                        return d.promise;
                    };
                }
            };
        });
})();
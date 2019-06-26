(function(){
    function NavigationController($scope){
        $scope.login=function(){
            console.log('logged in');
            $scope.user='Vivek';
        }

        $scope.logout=function(){
            $scope.user=null;
            console.log('logged out');
        }
    }

    angular
        .module('movie-app')
        .controller('NavigationController',NavigationController);
})();
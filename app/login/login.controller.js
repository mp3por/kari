'use strict';
 
angular.
module('peachtreeApp')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService', '$state',
    function ($scope, $rootScope, $location, AuthenticationService, $state) {

        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = async function () {
            console.log('login');
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.email, $scope.password);
                    $location.path('/login');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
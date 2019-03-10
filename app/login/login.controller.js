'use strict';
 
angular.
module('peachtreeApp')
 
.controller('LoginController',
    ['$scope', 'AuthenticationService', '$state',
    function ($scope, AuthenticationService, $state) {

        $scope.email = 'test@email.com';
        $scope.password = 'test';

        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = async function () {

            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password).then(function(response) {
                if(response.success) {
                    console.log('login.controller login.success');
                    AuthenticationService.SetCredentials($scope.email, $scope.password);
                    $state.go('home');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
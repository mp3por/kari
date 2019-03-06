'use strict';

import { async } from "q";

 
angular.
module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {

        console.log('LoginController');
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = async function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.email, $scope.password);
                    $location.path('/transactions');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
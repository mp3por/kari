'use strict';

angular.module('Authentication', []);
angular.module('Transactions', []);

angular.
module('peachtreeApp', [
    'Authentication',
    'Transactions',
    'ngRoute'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'login/views/login.html',
            hideMenus: true
        })
 
         .when('/transactions', {
             controller: 'TransactionsController',
             templateUrl: 'transactions/views/transactions.html',
         })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$http',
    function ($rootScope, $location, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata.access_token; 
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if (!$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
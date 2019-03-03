'use strict';

angular.module('Authentication', []);
angular.module('Transactions', []);

angular.
module('peachtreeApp', [
    'Authentication',
    'Transactions',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'login/views/login.html',
            hideMenus: true
        })
 
         .when('/transactions', {
             controller: 'TransactionsController',
             templateUrl: 'transactions/views/transactions.html'
         })
 
        .otherwise({ redirectTo: '/' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; 
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
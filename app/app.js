'use strict';

// angular.module("Authentication", [ui.router]);
// angular.module("Transactions", [ui.router]);

let ptApp = angular
  .module('peachtreeApp', ['ui.router']);

ptApp.config(['$stateProvider', '$urlRouteProvider', function($stateProvider, $urlRouteProvider) {
      $stateProvider
        .state("login", {
          url: "/login",
          templateUrl: "login/views/login.html",
          controller: "LoginController",
          hideMenus: true
        })

        .state("transactions", {
          url: "/transactions",
          templateUrl: "transactions/views/transactions.html",
          controller: "TransactionsController",
        })

        // .otherwise({ redirectTo: "/login" });
    }
  ])

  .run([
    "$rootScope",
    "$location",
    "$http",
    function($rootScope, $location, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common["Authorization"] =
          "Basic " + $rootScope.globals.currentUser.authdata.access_token;
      }

      $rootScope.$on("$locationChangeStart", function(event, next, current) {
        // redirect to login page if not logged in
        if (!$rootScope.globals.currentUser) {
          $location.path("/login");
        }
      });
    }
  ]);

'use strict';

// angular.module("Authentication", [ui.router]);
// angular.module("Transactions", [ui.router]);

let ptApp = angular
  .module('peachtreeApp', ['ui.router', 'Authentication']);

ptApp.config(['$stateProvider', function($stateProvider) {
      console.log('app.js - config');
      $stateProvider
        .state("login", {
          url: "/login",
          templateUrl: "login/views/login.html",
          controller: "LoginController"
        })

        .state("home", {
          url: "/home",
          templateUrl: "home/home.html",
        //   controller: "HomeController",
        })

        // .state("transactions",{
        //     url: "/transactions",
        //     component: "/transactions",
        //     resolve: {
        //         transactions: function(TransactionsService) {
        //             return TransactionsService.getAllTransactrions();
        //         }
        //     }
        // })

        // .state("transfer", {
        //     parent: "/home",
        //     url: "/transfer",
        //     templateUrl: "home/views/transfer.html",
        // })

        // .otherwise({ redirectTo: "/login" });
    }
  ])

  .run([
    "$rootScope",
    "$location",
    "$http",
    function($rootScope, $location, $http) {
      console.log('app.js - run');
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

angular.module('peachtreeApp').directive('transferMoney', function(){
    return {
        templateUrl: '../views/transfer.html',
        controller: 'transferController'
    };
}).controller('transferController', ["$scope", function($scope){
    $scope.amount = 10;
}]);
angular.module('peachtreeApp')
.controller('transferController', ["$scope", function($scope){
    
    $scope.vili = 'OMG';
    $scope.kari = { BLQT : true };
    
    $scope.transaction = {};
    $scope.transaction.amount = 10;
}])
.directive('transferMoney', function(){
    return {
        templateUrl: 'home/views/transfer.html',  
        controller: 'transferController'
    };
})
.directive('transferMoneyTwo', function () {
    return {
        templateUrl: 'home/views/transfer2.html',
        controller: 'transferController'
    };
});
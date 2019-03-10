angular.module('peachtreeApp')
// .controller('transferController', )
.directive('transferMoney', function(){
    return {
        templateUrl: 'home/views/transfer.html',  
        controller: ["$scope", 'transactionService', function($scope, transactionService){
    
            console.log('transferController');
            $scope.vili = 'OMG';
            $scope.kari = { BLQT : true };
            
            $scope.transaction = {};
            $scope.fetchTransaction = {};
            $scope.transaction.amount = 10;
        
            $scope.sendMoney = function ( ) {
                transactionService.makeTransfer($scope.transaction);
            };

            $scope.fetchParticularTransaction = function ()  {
                transactionService.getTransactionById($scope.fetchTransaction.id).then(transaction => {
                    $scope.fetchedTransaction = transaction;
                });
            };
        }]
    };
})
.directive('transferMoneyTwo', function () {
    return {
        templateUrl: 'home/views/transfer2.html',
        controller: 'transferController'
    };
});
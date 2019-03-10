const TRANSACTIONS = [
    {
      "id": "1",
      "recipient": "HM",
      "sender": "Main Account",
      "amount": "£200.00",
      "date": "08/03/2019",
      "status": "sent"
    },
    {
      "id": "2",
      "recipient": "Gas Company",
      "sender": "Main Account",
      "amount": "£150.00",
      "date": "08/03/2019",
      "status": "received"
    },
    {
      "id": "3",
      "recipient": "Vili Kerkov",
      "sender": "Main Account",
      "amount": "£30.00",
      "date": "09/03/2019",
      "status": "received"
    },
    {
      "id": "4",
      "recipient": "Georgi Sofkin",
      "sender": "Secret Account",
      "amount": "£3000.00",
      "date": "08/03/2019",
      "status": "sent"
  }
];  

angular.module('peachtreeApp').service('transactionService',  [ '$timeout', function($timeout){
    this.makeTransfer = function (transaction) {
        return $http.post('http://custombackend', transaction);
    };

    this.getTransactions = function () {
        return $timeout( () => { return TRANSACTIONS; }, 100 );
    };

    this.getTransactionById = function( transactionId ) {
        return $timeout( () => { return TRANSACTIONS.find( (transaction) => { return transaction.id === transactionId; }); }, 100 );
    }
}]);
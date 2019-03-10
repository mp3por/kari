'use strict'

angular.module('peachtreeApp')
.service('TransactionsService', function($http){
    let service = {
        getAllTransactions: function() {
            return $http.get('/app/home/data/transactions.json', {cache:true})
            .then(function(resp){
                return resp.data;
            });
        },

        getTransaction: function(id) {
            function transactionMatchesParam(transaction) {
                return transaction.id === id;
            }

            return service.getAllTransactions()
            .then(function (transactions) {
                transactions.find(transactionMatchesParam)
            });
        }
    }
});
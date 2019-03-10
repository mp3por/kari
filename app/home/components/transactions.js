angular
.module('peachtreeApp')
.component('transactions', {
    bindings: { transactions: '<' },
    templateUrl: "/app/home/views/transactions.html"
  })
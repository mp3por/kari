'use strict';
 
const Transactions = 
angular.
module('Transactions', [ui.router]);

Transactions.config(function($stateProvider){

    const transferState = {

        name: 'transfer',
        url: '/transfer',
        template: <h3>Make a transfer</h3>
    
    }

    const listState = {

        name: 'list',
        url: '/list',
        template: <h3>lists here</h3>
    }

    $stateProvider.state(transferState);
    $stateProvider.state(listState);
});
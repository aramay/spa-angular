(function () {
    'use strict';

    angular.module('ShoppingList')
    .controller('ItemDetailController', ItemDetailController);

    ItemDetailController.$inject = ['item'];
    function ItemDetailController(item) {
        console.log(item);
        var itemdetail = this;
        console.log(itemdetail);

        itemdetail.name = item.name;
        itemdetail.quantity = item.quantity;
        // itemdetail.quantity = item.quantity;
        itemdetail.description = item.description;

    }

}) ();

(function () {
    'use strict';

    angular.module('ShoppingList')
    .controller('ItemDetailController', ItemDetailController);

    //  instead of injecting the item in there, we're actually going to inject items because items, as we spoke about, is coming from the parent state.

    ItemDetailController.$inject = ['$stateParams', 'items'];
    function ItemDetailController($stateParams, items) {
        console.log(items);

        var itemdetail = this;

        console.log(itemdetail);

        var item = items[$stateParams.itemId];

        itemdetail.name = item.name;
        itemdetail.quantity = item.quantity;
        // itemdetail.quantity = item.quantity;
        itemdetail.description = item.description;

    }

}) ();

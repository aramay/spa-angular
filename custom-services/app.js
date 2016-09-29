(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListAddController', ShowListAddController);
    app.controller('ShowListShowController', ShowListShowController);

    app.service('ShoppingListService', ShoppingListService);



    ShowListAddController.$inject = ['ShoppingListService'];

    function ShowListAddController (ShoppingListService) {

        var itemAdder = this;

        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function () {
            console.log("add item service");

            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        };


    }

    ShowListShowController.$inject = ['ShoppingListService'];

    function ShowListShowController(ShoppingListService) {

        var showList = this;

        showList.items = ShoppingListService.getItems();

        showList.removeItem = function (itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        };

    }

    function ShoppingListService() {

        var service = this;
        // List of items
        var items = [];

        service.addItem = function (itemName, itemQuantity) {

            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items.push(item);
            console.log(items);
        };

        service.getItems = function () {
            return items;
        };

        service.removeItem = function (itemIndex) {

            items.splice(itemIndex, 1);

        };

    }

}) ();

(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListController1', ShowListController1);
    app.controller('ShowListController2', ShowListController2);

    // app.service('ShoppingListService', ShoppingListService);
    app.factory('ShoppingListFactory', ShoppingListFactory);



    ShowListController1.$inject = ['ShoppingListFactory'];

    function ShowListController1 (ShoppingListFactory) {

        // var itemAdder = this;
        var list1 = this;
        // use factory to create new shopping list1
        var shoppingList = ShoppingListFactory();


        list1.itemName = "";
        list1.itemQuantity = "";

        list1.addItem = function () {
            console.log("add item service");

            shoppingList.addItem(list1.itemName, list1.itemQuantity);
        };

        list1.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);

        };
        // retrieve items to display
        list1.items = shoppingList.getItems();


    }

    ShowListController2.$inject = ['ShoppingListFactory'];

    function ShowListController2(ShoppingListFactory) {

        var list2 = this;

        list2.itemName = "";
        list2.itemQuantity = "";

        // use factory to create new shopping list2 with limited items
        var shoppingList = ShoppingListFactory(3);
        console.log(shoppingList);

        list2.items = shoppingList.getItems();


        list2.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);
        };

        list2.addItem = function () {
            try {
                shoppingList.addItem(list2.itemName, list2.itemQuantity);

            } catch (e) {
                list2.errorMessage = e.message;
                console.log(e.message);
            }
        };

    }

    function ShoppingListService(maxItems) {

        var service = this;
        // List of items
        var items = [];

        service.addItem = function (itemName, itemQuantity) {

            if (maxItems === undefined) {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
                console.log(items);

            } else if (maxItems !== undefined && items.length < maxItems) {

                var item1 = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item1);
                console.log(items);
            }
            else {
                throw new Error("max items (" + maxItems + ") reached");
            }
        };

        service.getItems = function () {
            return items;
        };

        service.removeItem = function (itemIndex) {

            items.splice(itemIndex, 1);

        };

    }

    function ShoppingListFactory() {
        var factory = function (maxItems) {
            return new ShoppingListService(maxItems);

        };
        return factory;
    }

}) ();

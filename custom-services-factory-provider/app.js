(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListController1', ShowListController1);
    // app.controller('ShowListController2', ShowListController2);

    // app.service('ShoppingListService', ShoppingListService);
    // app.factory('ShoppingListFactory', ShoppingListFactory);

    // Name of function does not matter
    app.provider('ShoppingListService', ShoppingListServiceProvider).config(Config);

    Config.$inject = ['ShoppingListServiceProvider']; //append provider at the end of service register

    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems = 2;
    }




    ShowListController1.$inject = ['ShoppingListService'];

    function ShowListController1 (ShoppingListService) {

        // var itemAdder = this;
        var list1 = this;



        list1.itemName = "";
        list1.itemQuantity = "";

        list1.addItem = function () {

            try {

                ShoppingListService.addItem(list1.itemName, list1.itemQuantity);
            } catch (e) {
                list1.errorMessage = e.message;
            }
            console.log(list1.errorMessage);
        };

        list1.removeItem = function (itemIndex) {
            ShoppingListService.removeItem(itemIndex);

        };
        // retrieve items to display
        list1.items = ShoppingListService.getItems();


    }

    // ShowListController2.$inject = ['ShoppingListFactory'];
    //
    // function ShowListController2(ShoppingListFactory) {
    //
    //     var list2 = this;
    //
    //     list2.itemName = "";
    //     list2.itemQuantity = "";
    //
    //     // use factory to create new shopping list2 with limited items
    //     var shoppingList = ShoppingListFactory(3);
    //     console.log(shoppingList);
    //
    //     list2.items = shoppingList.getItems();
    //
    //
    //     list2.removeItem = function (itemIndex) {
    //         shoppingList.removeItem(itemIndex);
    //     };
    //
    //     list2.addItem = function () {
    //         try {
    //             shoppingList.addItem(list2.itemName, list2.itemQuantity);
    //
    //         } catch (e) {
    //             list2.errorMessage = e.message;
    //             console.log(e.message);
    //         }
    //     };
    //
    // }

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

    function ShoppingListServiceProvider() {

        var provider = this;

        provider.defaults = {
            maxItems: 5
        };

        provider.$get = function () {

            var shoppingList = new ShoppingListService (provider.defaults.maxItems);

            return shoppingList;

        };

    }



    // function ShoppingListFactory() {
    //     var factory = function (maxItems) {
    //         return new ShoppingListService(maxItems);
    //
    //     };
    //     return factory;
    // }

}) ();

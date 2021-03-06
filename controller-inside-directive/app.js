(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListController1', ShowListController1);
    // app.controller('ShowListController2', ShowListController2);

    // app.service('ShoppingListService', ShoppingListService);
    app.factory('ShoppingListFactory', ShoppingListFactory);
    app.directive('shoppingList', ShoppingListDirective);

    function ShoppingListDirective() {
        var ddo = {
            templateUrl: 'shopppingList.html',
            scope: {
                items: '<',
                title: '@'
            },
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    }

    function ShoppingListDirectiveController() {

        var list = this;

        console.log(list.items);

        list.cookiesInList = function () {
            for (var i = 0; i < list.items.length; i++) {
              var name = list.items[i].name;
              if (name.toLowerCase().indexOf("cookie") !== -1) {
                return true;
              }
            }

            return false;
        };
    }

    ShowListController1.$inject = ['ShoppingListFactory'];

    function ShowListController1 (ShoppingListFactory) {

        // var itemAdder = this;
        var list = this;
        // use factory to create new shopping list
        var shoppingList = ShoppingListFactory();

        // retrieve items to display
        list.items = shoppingList.getItems();

        var orgTitle = "Shopping List#1 - unlimited";

        list.title = orgTitle +" "+ list.items.length + " items";

        list.itemName = "";
        list.itemQuantity = "";


        list.addItem = function () {
            console.log("add item service");

            shoppingList.addItem(list.itemName, list.itemQuantity);

            list.title = orgTitle + list.items.length + " items";
        };

        list.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);

            list.title = orgTitle + list.items.length + " items";

        };


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

    function ShoppingListFactory() {
        var factory = function (maxItems) {
            return new ShoppingListService(maxItems);

        };
        return factory;
    }

}) ();

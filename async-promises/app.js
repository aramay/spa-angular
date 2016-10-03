(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListController', ShowListController);
    app.service('ShoppingListService', ShoppingListService);

    ShowListController.$inject = ['ShoppingListService'];
    function ShowListController(ShoppingListService) {

        var list = this;

        list.itemName = "";
        list.itemQuantity = 0;

        list.addItem = function () {
            ShoppingListService.addItem(list.itemName, list.itemQuantity);
        };

        list.items = ShoppingListService.getItems();

    }

    function ShoppingListService() {

        var service = this;

        var list = [];

        service.addItem = function (itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };

            list.push(item);
        };

        service.getItems = function () {

            return list;

        };
    }

}) ();

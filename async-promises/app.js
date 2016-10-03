(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListController', ShowListController);

    app.service('ShoppingListService', ShoppingListService);
    app.service('WeightLossFilterService', WeightLossFilterService);

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

    // we're injecting it with this service called WeightLossFilterService.
    ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];

    function ShoppingListService($q, WeightLossFilterService) {

        var service = this;

        var list = [];

        service.addItem = function (itemName, itemQuantity) {
            var promise = WeightLossFilterService.checkName(itemName);

            promise.then(function (response) {

                var nextPromise = WeightLossFilterService.checkQuantity(itemQuantity);

                nextPromise.then(function (result) {
                    var item = {
                        name: itemName,
                        quantity: itemQuantity
                    };
                    list.push(item);

                }, function (errorResponse) {
                    console.log(errorResponse.message);
                });

            }, function (errorResponse) {
                console.log(errorResponse.message);
            });

        };

        service.getItems = function () {

            return list;

        };
    }

    WeightLossFilterService.$inject = ['$q', '$timeout'];

    function WeightLossFilterService($q, $timeout) {

        var service = this;

        // checkName method first acquires our deferred object that contains the environment for the entire asynchronize behavior and sets up
        service.checkName = function (name) {

            var deferred = $q.defer();

            var result = {
                message: ""
            };

            $timeout(function () {
                if (name.toLowerCase().indexOf('cookie') === -1) {
                    deferred.resolve(result);

                }
                else {
                    result.message = "No cookies allowed... !!";
                    deferred.reject(result);
                }
            }, 3000);

            return deferred.promise;
        };

        service.checkQuantity = function (quantity) {

            var deferred = $q.defer();

            var result = {
                message: ""
            };

            $timeout(function () {
                if (quantity < 6) {
                    deferred.resolve(result);

                }
                else {
                    result.message = "too many cookies...has to be less than 6 !!";
                    deferred.reject(result);
                }
            }, 1000);

            return deferred.promise;
        };
    }

}) ();

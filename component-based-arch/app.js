(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('ShowListController1', ShowListController1);
    // app.controller('ShowListController2', ShowListController2);

    // app.service('ShoppingListService', ShoppingListService);
    app.factory('ShoppingListFactory', ShoppingListFactory);
    app.component('shoppingList', {
        templateUrl: 'shopppingList.html',
        controller: ShoppingListComponentController,
        bindings: {
            items: '<',
            title: '@',
            // create a badRemove property, and we're going to use an equal sign. So it will be a bidirectional binding, and the function value of that remove that we're going to pass in is going to be equal to this badRemove property.
            badRemove: '=',
            onRemove: '&'
        }
    });


    ShoppingListComponentController.$inject = ['$scope', '$element']
    function ShoppingListComponentController($scope, $element) {

        var $ctrl = this;

        console.log($ctrl.items);

        $ctrl.cookiesInList = function () {
            for (var i = 0; i < $ctrl.items.length; i++) {
              var name = $ctrl.items[i].name;
              if (name.toLowerCase().indexOf("cookie") !== -1) {
                return true;
              }
            }

            return false;
        };

        // the key value here who's key has to match whatever it is the name that we used in the binding, unremoved binding of our shopping list components.
        $ctrl.remove = function (myIndex) {
            // Which calls the reference function that was passed in from the parent controller with the map of key value.
            $ctrl.onRemove({index: myIndex});
        };

        $ctrl.$onInit = function () {
            console.log("we'r on onInit()");
        };

        $ctrl.$onChanges = function (changeObj) {
            console.log("changes ", changeObj);
        };

        $ctrl.$postLink = function () {
            $scope.$watch('$ctrl.cookiesInList()', function (newValue, oldValue) {

                // item right here. And that is coming from the $post link. So, that's how we get the parent item or the top item of our component.
                console.log($element);

                if (newValue === true) {
                    var warnEle = $element.find('div.error');
                    warnEle.slideDown(900);
                }
                else{
                    var hideEle = $element.find('div.error');
                    hideEle.slideUp(900);
                }
            });
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

            console.log("this is: ", this);

            this.lastRemoved = "last removed was " + this.items[itemIndex].name;

            shoppingList.removeItem(itemIndex);

            // list.title = orgTitle + list.items.length + " items";
            this.title = orgTitle + list.items.length + " items";

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

(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('MenuCategoriesController', MenuCategoriesController);

    app.service('MenuCategoriesService', MenuCategoriesService);
    // app.service('WeightLossFilterService', WeightLossFilterService);
    app.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    MenuCategoriesController.$inject = ['MenuCategoriesService'];
    function MenuCategoriesController(MenuCategoriesService) {

        var menu = this;

        // list.itemName = "";
        // list.itemQuantity = 0;
        var promise = MenuCategoriesService.getMenuCategories();

        promise.then(function (response) {
            menu.categories = response.data;
        }).catch(function (error) {
            console.log(error);
            console.log("http request failed .. !!");
        });
    }

    // we're injecting it with this service called WeightLossFilterService.
    MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];

    function MenuCategoriesService($http, ApiBasePath) {

        var service = this;

        service.getMenuCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
            return response;
        };
    }


}) ();

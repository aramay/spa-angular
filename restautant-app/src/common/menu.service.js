(function () {
    "use strict";

    angular.module('common')
    .service('MenuService', MenuService);

    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {

        console.log("menu service called");

        var service = this;

        var paramsMenu = {
            method: 'GET',
            url: ApiPath + '/categories.json'
        };

        var paramsCategory = {
            method: "GET",
            url: ApiPath + '/menu_items.json'
        };

        service.getCategories = function () {


            return $http(paramsMenu).then(function (response) {

                console.log("http success getCategories ", response.data);
                return response.data;

            }, function error(error) {
                console.log("error getCategories ", error);
            });
        };

        service.getMenuItems = function (categoryName) {

            paramsCategory.params = {category: categoryName};

            return $http(paramsCategory).then(function (response) {
                console.log("http succces getMenuItems ", response.data);
                return response.data;
            }, function (error) {
                console.log("http failed getMenuItems ", error);
            });
        };
    }
}) ();

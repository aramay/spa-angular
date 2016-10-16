(function () {
    "use strict";

    angular.module('common')
    .service('MenuService', MenuService);

    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {

        console.log("menu service called");

        var service = this;

        var paramsCategories = {
            method: 'GET',
            url: ApiPath + '/categories.json'
        };

        service.getCategories = function () {


            return $http(paramsCategories).then(function (response) {

                console.log("http success ", response.data);
                return response.data;

            }, function error(error) {
                console.log("error ", error);
            });
        };
    }
}) ();

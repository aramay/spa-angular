(function () {
    "use strict";

    angular.module('common').
    service('MenuService', MenuService);

    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {
        var service = this;

        var paramsCategories = {
            method: 'GET',
            url: ApiPath + '/categories.json'
        };

        service.getCategories = function () {


            return $http(paramsCategories).then(function (response) {

                return response.data;

            }, function error(error) {
                console.log("error ", error);
            });
        };
    }
}) ();

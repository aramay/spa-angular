(function () {
    "use strict";

    angular.module('public')
    .controller('MenuController', MenuController);

    MenuController.$inject = ['menuCategories'];
    function MenuController(menuCategories) {

        var $ctrl = this;
        $ctrl.menuCategories = menuCategories;
        console.log("categories in controller ", $ctrl.menuCategories);
        console.log("menu controller ", MenuController);
    }
}) ();

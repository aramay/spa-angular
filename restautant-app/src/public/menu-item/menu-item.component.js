(function () {
    "use strict";

    angular.module('public').component('menuItem',{
        url:'src/public/menu-item/menu-item.component.js',
        binding:{
            menuItem: '<'
        }
    });

}) ();

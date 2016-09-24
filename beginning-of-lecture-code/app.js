(function(){

    'use strict';

    var x = "hello";

    var app = angular.module("myFirstApp",[]);

    app.controller('MyFirstController', function($scope){

        $scope.name = "angular";

        $scope.sayHello = function (){
            return "hello scope function";
        };

    });

}) ();

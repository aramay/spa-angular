(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('NameCalculartorController', function($scope){

        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumericValue = function (){
            var tempNameValue = calculateNumericForString($scope.name); //get the value
            console.log(tempNameValue);

            $scope.totalValue = tempNameValue;

        };

        function calculateNumericForString(string){
            var tempStringValue = 0;

            for (var i = 0; i < string.length; i++) {
                tempStringValue += string.charCodeAt(i);
            }

            console.log(tempStringValue);

            return tempStringValue;

        }

    });

}) ();

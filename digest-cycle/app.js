(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];


    function CounterController ($scope) {

        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.showNumberOfWatchers = function (){

            console.log("# of watchers", $scope.$$watchersCount);

        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function () {
            $scope.counter ++ ;
        };

        // For that there's a special function on the scope service called $watch, and it takes two arguments. The first one is the name of the property we want to watch. In this case is onceCounter and the second argument is the function that is going to watch these arguments which has two values,newValue and oldValue pass to it by the Angular context.

        $scope.$watch('onceCounter', function (newValue, oldValue) {

            console.log("onceCounter old value", oldValue);
            console.log("onceCounter new value", newValue);

        });

        // And if we keep clicking this up one counter, you'll see that nothing else is showing up. Well, the reason it's not showing up, the reason the old value and the new value is not being printed out anymore is because we only update this once. And once we update it once, our watch no longer sees the onceCounter as changing, and therefore this function is no longer firing. However, we could declare

        $scope.$watch('counter', function (newValue, oldValue) {

            console.log("counter old value", oldValue);
            console.log("counter new value", newValue);

        });

    }

}) ();

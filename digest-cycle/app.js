(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];


    function CounterController ($scope, $timeout) {

        $scope.onceCounter = 0;
        $scope.counter = 0;


        $scope.upCounter = function () {

            $timeout(function () {
                $scope.counter ++ ;
                console.log("counter incremented");
                
            }, 2000);
        };

        // However, in practice you should always try to see if there's an AngularJS alternative that's available that is native to AngularJS. In our case, there's Is a service called dollar sign timeout that does exactly the same thing as set timeout does except that does it inside the angular context already, so what do you need to do on any of these tricks. So let's go ahead and rewrite this one last time but this time we're going to use the angular timeout service Instead of the native set timeout from JavaScript. So the first thing we

        // $scope.upCounter = function () {
        //
        //     setTimeout(function (){
        //         $scope.$apply(function () {
        //             $scope.counter ++ ;
        //             console.log("counter incremented");
        //         });
        //     }, 2000);
        // };

        // That's all well and good, but there is a better way of doing this than colon digest. The problem with colon digest directly is if there is any kind of errors or any exceptions that happen in the colon that we are executing, the exceptions thrown as part of this code. Will not be visible to Angular JS, so how can we make it visible to Angular JS? Well, there comes the special function called $apply, so let's go ahead and actually it will just keep it for your

        // $scope.upCounter = function () {
        //
        //     setTimeout(function (){
        //         $scope.counter ++ ;
        //         console.log("counter incremented");
        //         $scope.$digest();
        //     }, 2000);
        // };

        // the counter got incremented. Except there's one problem. The regular counter here, the interpolation still says 0. How come that is going on, well the reason that's going on is this timeout gets put in the event Q completely separately from this call of upCounter really gets it taken out out of the angular context all together. It's not being called inside the angular context. And because it's not being called inside the angular context the digest cycle doesn't know to have to To kick off at all.

        // $scope.upCounter = function () {
        //
        //     setTimeout(function (){
        //         $scope.counter ++ ;
        //         console.log("counter incremented");
        //
        //     }, 2000);
        // };


        // $scope.showNumberOfWatchers = function (){
        //
        //     console.log("# of watchers", $scope.$$watchersCount);
        //
        // };
        // $scope.countOnce = function () {
        //     $scope.onceCounter = 1;
        // };
        //
        // $scope.$watch(function () {
        //     console.log("digest loop fired");
        // });

        // #################
        // Now, the way that we've set up the watchers is actually not a recommended way at all. You should never have these $watch functions executed inside of your controller. And
        // ******************

        // For that there's a special function on the scope service called $watch, and it takes two arguments. The first one is the name of the property we want to watch. In this case is onceCounter and the second argument is the function that is going to watch these arguments which has two values,newValue and oldValue pass to it by the Angular context.

        // $scope.$watch('onceCounter', function (newValue, oldValue) {
        //
        //     console.log("onceCounter old value", oldValue);
        //     console.log("onceCounter new value", newValue);
        //
        // });

        // And if we keep clicking this up one counter, you'll see that nothing else is showing up. Well, the reason it's not showing up, the reason the old value and the new value is not being printed out anymore is because we only update this once. And once we update it once, our watch no longer sees the onceCounter as changing, and therefore this function is no longer firing. However, we could declare

        // $scope.$watch('counter', function (newValue, oldValue) {
        //
        //     console.log("counter old value", oldValue);
        //     console.log("counter new value", newValue);
        //
        // });

    }

}) ();

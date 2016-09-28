(function(){

    'use strict';

    var app = angular.module("myFirstApp",[]);

    app.controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];

    function BindingController ($scope) {

        $scope.firstName = "angular";
        // $scope.fullName = "";

        $scope.displayNumberOfWatcher = function () {

            console.log("# of watchers", $scope.$$watchersCount);

        };

        $scope.setFullName = function () {
            $scope.fullName = $scope.firstName + "js";
        };

        $scope.logFirstName = function () {
            console.log("first name", $scope.firstName);
        };

        $scope.logFullName = function () {
            console.log("full name", $scope.fullName);
        };

        //  So now if we click Set Full Name, you'll see it will appear right here, but if we click log # of Watchers again, it's no longer 2, it's 1. Because once we bounded 1-time bounded to our HTML template, we no longer need that watcher. We could save that performance and remove the watcher from our watchers list. So therefore, that is why we only have 1 here. Meanwhile, the 2-way binding


    }

}) ();

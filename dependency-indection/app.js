(function(){

    'use strict';

    var x = "hello";

    var app = angular.module("myFirstApp",[]);

    app.controller('DIController', DIController );

    function DIController($scope, $filter){
        $scope.name = "angular";

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }

    function AnnotateMe(name){
        return "blahh!!";
    }

    console.log(AnnotateMe());

    console.log(DIController);

}) ();

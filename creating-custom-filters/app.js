(function(){

    'use strict';

    var x = "hello";

    var app = angular.module("MsgApp",[]);

    app.controller('MsgController', MsgController );

    app.filter('loves', LoveFilter);

    app.filter('truth', TruthFilter);


    MsgController.$inject = ['$scope','lovesFilter','truthFilter', '$filter'];

    function MsgController($scope, lovesFilter, truthFilter, $filter){

        $scope.name = "angular";
        $scope.state = "hungery";
        $scope.cost = .45;


        $scope.sayMessage = function (){
            var msg = "angular is great!!";

            var output = $filter('uppercase')(msg);
            // var output = LoveFilter(msg);

            console.log("saymessage function");
            return output;

        };
        $scope.sayLovesMessage = function (){
            var msg = "angular is great!!";

            var output = lovesFilter(msg);

            console.log("sayLove message function");
            console.log(output);
            return output;

        };

        $scope.feegHungry = function (){
            $scope.state = "feed";

        };

    }

    function LoveFilter(){
        return function (input){
            input = input || "" ;

            input = input.replace("great", "awesome");

            console.log("input", input);
            return input;
        };
    }

    function TruthFilter (){
        return function (input, target, replace){
            input = input || "" ;

            input = input.replace(target, replace);

            // console.log("input", input);
            return input;

        };
    }


}) ();

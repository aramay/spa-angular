(function (){

    var app = angular.module('LunchCheck',[]);

    app.controller('LunchCheckController', ['$scope', function($scope){

        $scope.name = "";
        $scope.message = "not done";

        $scope.submit = function(){

            list = $scope.name.split(",");

            console.log(list);

            for (var i = 0; i < list.length; i++) {
                if (list[i] === " ") {
                    list.splice(i, 1);
                    }
                }


                if (list.length < 3) {
                    $scope.message = "Please enter data first ..";
                } else {
                    $scope.message = "good choice !!";
                }
        };


    }]);


}) ();

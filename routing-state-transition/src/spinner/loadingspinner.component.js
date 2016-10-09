(function () {
'use strict';

angular.module('Spinner')

.component('loadingSpinner', {
  templateUrl: 'src/spinner/spinner.temp.html',
  controller: SpinnerController
});


SpinnerController.$inject = ['$rootScope'];
function SpinnerController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {

      console.log("spinner onInit fired");

      var cancel = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

          $ctrl.showSpinner = true;

      });
      console.log(cancel);
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {

          $ctrl.showSpinner = false;

      });

      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, options) {

          $ctrl.showSpinner = false;

      });

      cancellers.push(cancel);

  };

  $ctrl.$onDestroy = function () {

      cancellers.forEach(function (item) {

          item();

      });

  };

}

})();

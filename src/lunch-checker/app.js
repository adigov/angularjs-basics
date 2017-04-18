(function () {
  'use strict';

  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', LunchCheckerController);
  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    var SPLIT_SYMBOL = ',';

    $scope.lunchList = '';
    $scope.feedbackOnLunch = '';

    $scope.validateLunch = function () {
        var lunchItemsList = $scope.lunchList.split(SPLIT_SYMBOL);
        var totalItems = lunchItemsList.length;
        var message = '';

        lunchItemsList.forEach(function (item) {
          if (item === "") totalItems -= 1;
        });

        if (totalItems && totalItems <= 3) {
          message = 'Enjoy!';
        }else if (totalItems && totalItems > 3) {
          message = 'Too much!';
        }else {
          message = 'Please enter data first';
        }

        $scope.feedbackOnLunch = message;

    };
  }
})();

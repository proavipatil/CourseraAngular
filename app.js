(function () {
  'use strict';

  // Declare the AngularJS module
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  // Controller function
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchItems = '';  // Variable to hold the items entered by the user
    $scope.message = ''; // Variable to display the result message

    // Function to check if the number of items entered is too much
    $scope.checkLunch = function () {
      if ($scope.lunchItems === '') {
        // If the input is empty
        $scope.message = 'Please enter data first';
      } else {
        // Split the input string by commas and filter out empty items
        var items = $scope.lunchItems.split(',').filter(function (item) {
          return item.trim() !== '';  // Filter out empty or whitespace items
        });

        if (items.length <= 3) {
          // If the number of items is 3 or less
          $scope.message = 'Enjoy!';
        } else {
          // If the number of items is more than 3
          $scope.message = 'Too much!';
        }
      }
    };
  }

})();

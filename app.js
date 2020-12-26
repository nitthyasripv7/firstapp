(function () {
  'use strict';
  
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = '';
      $scope.messageStyle = { 'color': 'red' };
      $scope.textboxStyle = { 'border-color': 'red' };
      $scope.checkLunch = function () {
        var numItems = $scope.lunchItems
          .split(',')
          .filter(x => x.trim() != '')
          .length;
  
        if (numItems == 0) {
          $scope.message = 'Please enter data first';
          $scope.messageStyle = { 'color': 'red' };
          $scope.textboxStyle = { 'border-color': 'red' };
        } else if (numItems <= 3) {
          $scope.message = 'Enjoy!';
          $scope.messageStyle = { 'color': 'green' };
          $scope.textboxStyle = { 'border-color': 'green' };
        } else {
          $scope.message = 'Too much!';
          $scope.messageStyle = { 'color': 'green' };
          $scope.textboxStyle = { 'border-color': 'green' };
        }
      }
    }
  
  
  })();
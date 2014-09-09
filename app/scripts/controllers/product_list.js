'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
  .controller('ProductListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
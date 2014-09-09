'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
  .controller('MainCtrl', function ($scope) {
    $scope.cart_count = get_cart_items_length();
  });

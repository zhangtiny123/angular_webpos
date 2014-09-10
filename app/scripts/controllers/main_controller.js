'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
  .controller('MainCtrl', function ($scope, $location) {
        init();
        $scope.cart_count = get_cart_items_length();

        $scope.go_to_product_list = function() {
           $location.path('/product_list');
        };

        $scope.go_to_cart = function() {
            $location.path('/cart');
        }
  });

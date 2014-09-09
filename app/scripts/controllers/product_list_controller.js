'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
    .controller('ProductListCtrl', function ($scope) {
        $scope.cart_count = get_cart_items_length();

        $scope.products = loadAllItems();

        $scope.add_to_cart = function(barcode) {
            add_product(barcode);
        }
    });
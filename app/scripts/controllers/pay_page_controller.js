/**
 * Created by tiny on 14-9-9.
 */
'use strict';

/**
 * @ngdoc function
 * @name angularWebposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebposApp
 */
angular.module('angularWebposApp')
    .controller('PayPageCtrl', function ($scope, $location) {
        $scope.cart_count = get_cart_items().length;
        var item_list = printInventory(get_cart_items());
        $scope.products = item_list;
        $scope.products_in_promotion = _.filter(item_list, function(item) {
            return item.promotion_number != 0;
        });
        $scope.total_payments = calculate_total_payments(printInventory(get_cart_items()));
        $scope.saved_money = calculate_saved_money(printInventory(get_cart_items()));

        $scope.to_main_page = function() {
            $location.path('/main');
        };

        $scope.to_product_list = function() {
            $location.path('/product_list');
        };

        $scope.to_cart = function() {
            $location.path('/cart');
        };

        $scope.sure_to_pay = function() {
            localStorage.cart_items = JSON.stringify([]);
            $location.path('/product_list');
        }
    });
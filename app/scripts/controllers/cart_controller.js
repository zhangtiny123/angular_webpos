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
    .controller('CartCtrl', function ($scope, $location) {
        $scope.cart_count = get_cart_items_length();

        $scope.products = printInventory(JSON.parse(localStorage.cart_items));

        $scope.minus_count = function(barcode) {
            var cart_items = JSON.parse(localStorage.cart_items);
            cart_items.splice(cart_items.indexOf(barcode), 1);
            localStorage.cart_items = JSON.stringify(cart_items);

            var cart_items_reload = JSON.parse(localStorage.cart_items);
            var item_list = printInventory(cart_items_reload);
//            $scope.product.total_price = _.find(item_list, function(item) {
//                return item.barcode == barcode;
//            }).total_price;
//            $scope.product.count += 1;
            $scope.products = item_list;
            $scope.cart_count = cart_items_reload.length;
            $scope.total_payments = calculate_total_payments(item_list);
        };

        $scope.plus_count = function(barcode) {
            var cart_items = JSON.parse(localStorage.cart_items);
            cart_items.push(barcode);
            localStorage.cart_items = JSON.stringify(cart_items);

            var cart_items_reload = JSON.parse(localStorage.cart_items);
            var item_list = printInventory(cart_items_reload);
            $scope.products = item_list;
            $scope.cart_count = cart_items_reload.length;
//            $scope.product.total_price = _.find(item_list, function(item) {
//                return item.barcode == barcode;
//            }).total_price;
//            $scope.product.count -= 1;
            $scope.total_payments = calculate_total_payments(item_list);
        };

        $scope.go_to_product_list = function() {
            $location.path('/product_list');
        };

        $scope.go_to_main = function() {
            $location.path('/main');
        };

        $scope.total_payments = calculate_total_payments(printInventory(JSON.parse(localStorage.cart_items)));

        $scope.pay_for_it = function() {
            $location.path('pay_page');
        }
    });
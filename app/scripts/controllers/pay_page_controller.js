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
    .controller('PayPageCtrl', function ($scope) {
        $scope.cart_count = get_cart_items_length();
    });
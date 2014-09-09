'use strict';

/**
 * @ngdoc overview
 * @name angularWebposApp
 * @description
 * # angularWebposApp
 *
 * Main module of the application.
 */
angular
  .module('angularWebposApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product_list', {
        templateUrl: 'views/product_list.html',
        controller: 'ProductListCtrl'
      })
        .when('/pay_page', {
            templateUrl: 'views/pay_page.html',
            controller: 'PayPageCtrl'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

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
      .when('/about', {
        templateUrl: '../views/product_list.html',
        controller: 'ProductListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name stockMasterApp
 * @description
 * # stockMasterApp
 *
 * Main module of the application.
 */
angular
  .module('stockMasterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name stockMasterApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the stockMasterApp
 */
angular.module('stockMasterApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

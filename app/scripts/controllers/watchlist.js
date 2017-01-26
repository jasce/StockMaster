'use strict';

/**
 * @ngdoc function
 * @name stockMasterApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockMasterApp
 */
angular.module('stockMasterApp')
  .controller('WatchlistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

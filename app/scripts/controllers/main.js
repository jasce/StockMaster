'use strict';

/**
 * @ngdoc function
 * @name stockMasterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockMasterApp
 */
angular.module('stockMasterApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
   	//[1] Populate watchlists for dynamic nav links
   	$scope.watchlists = WatchlistService.query();
   	//[2] Using $location.path() as $watch expression
   	$scope.$watch(function(){
   		return $location.path();
   	},function(path){
   		if(_.includes(path,'watchlist')){
   			$scope.activeView = 'watchlist';
   		} else{
   			$scope.activeView = 'dashboard';
   		}
   	});
  });

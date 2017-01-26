'use strict';

/**
 * @ngdoc directive
 * @name stockMasterApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockMasterApp')
	// [1] register direct and inject dependencies
  .directive('stkWatchlistPanel', function ($location , $modal, $routeParams, WatchlistService) {
    return {
      templateUrl: ' views/templates/watchlist-panel.html',
      restrict: 'E',
      scope: {},
      link: function($scope){
      	 // [2] Initialize variables
      	 $scope.watchlist = {};
      	 $scope.currentList = $routeParams.listId;
      	 $scope.gotoList = function(listId){
      	 	$location.path('watchlist/' + listId);
      	 };
      	 var addListModal = $modal({
      	 	scope: $scope,
      	 	template: 'views/templates/addlist-modal.html',
      	 	show: false
      	 });

      	 // [3] Bind model from service to this scope
      	 $scope.watchlists = WatchlistService.query();

      	 // [4] Display addlist Modal
      	 $scope.showModal = function(){
      	 	addListModal.$promise.then(addListModal.show);
      	 };
      	 //[5] Create a new list from fields in modal
      	 $scope.createList = function() {
      	 	WatchlistService.save($scope.watchlist);
      	 	addListModal.hide();
      	 	$scope.watchlist = {};
      	 };
      	  // [6] Delete desired list and redirect to home
      	  $scope.deleteList = function(list){
      	  	WatchlistService.remove(list);
      	  	$location.path('/');
      	  };
      }
    };
  });

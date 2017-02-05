'use strict';

/**
 * @ngdoc function
 * @name stockMasterApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockMasterApp
 */
angular.module('stockMasterApp')
  .controller('WatchlistCtrl', function ($scope , $routeParams , $modal, WatchlistService , CompanyService) {
   $scope.companies = CompanyService.query();
   $scope.watchlist = WatchlistService.query($routeParams.listId);
   $scope.stocks = $scope.watchlist.stocks;
   $scope.newStock = {};
   var addStockModal = $modal({
   	scope: $scope,
   	template: 'views/templates/addstock-modal.html',
   	show: false
   });
   // Expose showStockModal to view via $scope
   $scope.showStockModal = function(){
   	addStockModal.$promise.then(addStockModal.show);
   };
   // Call the WatchlistModel addStock() function and hide the modal
   $scope.addStock = function(){
   	$scope.watchlist.addStock({
   		listId: $routeParams.listId,
   		company: $scope.newStock.company,
   		shares: $scope.newStock.shares
   	});
   	addStockModal.hide();
   	$scope.newStock = {};
   };
  });

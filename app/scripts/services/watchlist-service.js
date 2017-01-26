'use strict';

/**
 * @ngdoc service
 * @name stockMasterApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockMasterApp.
 */
angular.module('stockMasterApp')
  .service('WatchlistService', function WatchlistService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	//[1]  load watchlists from localStorage
  	var loadModel = function(){
  		var model = {
  			watchlists: localStorage['StockMaster.watchlists'] ? 
  						JSON.parse(localStorage['StockMaster.watchlists']) : [],
  						nextId: localStorage['StockMaster.nextId'] ? 
  						parseInt(localStorage['StockMaster.nextId']) : 0
  		};
  		return model;
  	};

  	//[2] Save watchlists to localStorage
  	var saveModel = function() {
  		localStorage['StockMaster.watchlists'] = JSON.stringify(Model.watchlists);
  		localStorage['StockMaster.nextId'] = Model.nextId;
  	};

  	//[3] Use lodash to find a watchlist with given ID
  	var findById = function (listId) {
  		return _.find(Model.watchlists , function (watchlist){
  			return watchlist.id === parseInt(listId);
  		});
  	};

  	//[4]  Return all watchlists or find by given ID
  	this.query = function(listId){
  		if (listId) {
  			findById(listId);
  		}
  		else{
  			return Model.watchlists;
  		}
  	};

  	// [5]  Save a new watchlist to watchlists model
  	this.save = function(watchlist){
  		
  		watchlist.id = Model.nextId++;
  		Model.watchlists.push(watchlist);
  		saveModel();
  	};

  	// [6] Remove given watchlist from watchlist model
  	this.remove = function(list){
  		_.remove(Model.watchlists , function(watchlist){
  			return list.id === watchlist.id;
  		});
  		saveModel();
  	};
  	 // [7] : Initialize Model for this singleton service

  	 var Model = loadModel();
  });

'use strict';

/**
 * @ngdoc service
 * @name stockMasterApp.CompanyService
 * @description
 * # CompanyService
 * Service in the stockMasterApp.
 */
angular.module('stockMasterApp')
  .service('CompanyService', function CompanyService($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('companies.json');
  });

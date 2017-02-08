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
    return $resource('companies.json');
  });
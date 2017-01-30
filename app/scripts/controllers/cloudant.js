'use strict';

/**
 * @ngdoc function
 * @name angularAssetApp.controller:CloudantCtrl
 * @description
 * # CloudantCtrl
 * Controller of the angularAssetApp
 */
angular.module('angularAssetApp')
  .controller('CloudantCtrl', function ($http, $scope) {
    console.log('CloudantCtrl initialised.');

    // Consume a public RESTful API and assign the response to a value.
    $http.get('https://b4094eb7-53fa-4346-996d-13ef28cca6db-bluemix.cloudant.com/customers/_all_docs?include_docs=true').
        success(function(data) {
            console.log('rest api call successful.');
            $scope.customers = data;
        });
  });

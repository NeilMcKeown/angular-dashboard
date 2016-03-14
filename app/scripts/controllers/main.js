'use strict';

/**
 * @ngdoc function
 * @name angularAssetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAssetApp
 */
angular.module('angularAssetApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    toastr.success('Have fun storming the castle!', 'Miracle Max Says');

    toastr.info("You killed my father, prepare to die.", "Inigo Montoya Says");

    toastr.error("I don't think that means what you think it means.", "Fezzik Says");
  });

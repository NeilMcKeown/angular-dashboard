'use strict';

/**
 * @ngdoc overview
 * @name angularAssetApp
 * @description
 * # angularAssetApp
 *
 * Main module of the application.
 */
angular
  .module('angularAssetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      // DASHBOARD
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      // JSON EDITOR
      .when('/jsoneditor', {
        templateUrl: 'views/jsoneditor.html',
        controller: 'JSONEditorCtrl',
        controllerAs: 'jsoneditor'
      })

      // STRIPE
      .when('/stripe', {
        templateUrl: 'views/stripe.html',
        controller: 'StripeCtrl',
        controllerAs: 'stripe'
      })

      // CHARTS
      .when('/flot', {
        templateUrl: 'views/flot.html',
        controller: 'FlotCtrl',
        controllerAs: 'flot'
      })
      .when('/morris', {
        templateUrl: 'views/morris.html',
        controller: 'MorrisCtrl',
        controllerAs: 'morris'
      })

      // MAPS
      .when('/googlemaps', {
        templateUrl: 'views/googlemaps.html',
        controller: 'GoogleMapsCtrl',
        controllerAs: 'googlemaps'
      })
      .when('/applemaps', {
        templateUrl: 'views/applemaps.html',
        controller: 'AppleMapsCtrl',
        controllerAs: 'applemaps'
      })
      .when('/bingmaps', {
        templateUrl: 'views/bingmaps.html',
        controller: 'BingMapsCtrl',
        controllerAs: 'bingmaps'
      })

      // DATABASE CONNECTIVITY
      .when('/cloudant', {
        templateUrl: 'views/cloudant.html',
        controller: 'CloudantCtrl',
        controllerAs: 'cloudant'
      })

      // TABLES
      .when('/tables', {
        templateUrl: 'views/tables.html'
        //,controller: 'TablesCtrl'
        //,controllerAs: 'tables'
      })

      // FORMS
      .when('/forms', {
        templateUrl: 'views/forms.html'
        //,controller: 'FormsCtrl'
        //,controllerAs: 'forms'
      })

      // UI ELEMENTS
      .when('/panels-wells', {
        templateUrl: 'views/panels-wells.html'
        //,controller: 'FormsCtrl'
        //,controllerAs: 'forms'
      })
      .when('/buttons', {
        templateUrl: 'views/buttons.html'
        //,controller: 'ButtonsCtrl'
        //,controllerAs: 'buttons'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html'
        //,controller: 'NotificationsCtrl'
        //,controllerAs: 'notifications'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html'
        //,controller: 'TypographyCtrl'
        //,controllerAs: 'typography'
      })
      .when('/icons', {
        templateUrl: 'views/icons.html'
        //,controller: 'IconsCtrl'
        //,controllerAs: 'icons'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html'
        //,controller: 'GridCtrl'
        //,controllerAs: 'grid'
      })

      // OTHERWISE
      .otherwise({
        redirectTo: '404.html'
      });
  });

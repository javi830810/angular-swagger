'use strict';

var app = angular
  .module('ulticonnectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'swaggerUi',
    'ui.router'
  ]);

  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/index.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/api', {
  //      templateUrl: 'views/api.html',
  //      controller: 'ApiCtrl',
  //      controllerAs: 'api'
  //    })
  //    .when('/api/:name', {
  //      templateUrl: 'views/api.html',
  //      controller: 'OperationController',
  //      controllerAs: 'api_details'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'views/index.html',
      controller: 'HomeController'
    })
    .state('api', {
      url:'/api',
      templateUrl: 'views/api.html',
      controller: 'ApiController'
    })
    .state('api.operation', {
      url:'/:name',
      templateUrl: 'views/operations.html',
      controller: 'OperationsController'
    })

}]);

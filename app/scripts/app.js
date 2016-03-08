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
    'ui.router',
    'ui.bootstrap'
  ]);


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

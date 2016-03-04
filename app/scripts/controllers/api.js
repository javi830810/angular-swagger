'use strict';

/**
 * @ngdoc function
 * @name ulticonnectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ulticonnectApp
 */
angular.module('ulticonnectApp')
  .controller('ApiController', function ($scope) {

    // init form
    $scope.isLoading = false;
    $scope.url = $scope.swaggerUrl = 'http://petstore.swagger.io/v2/swagger.json';
    // error management
    $scope.myErrorHandler = function(data, status){
      alert('failed to load swagger: ' + status+'   '+data);
    };

  });

angular.module('ulticonnectApp')
  .controller('OperationsController', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.apiLoaded = true;
    $scope.apiName = $stateParams.name;

    $scope.label = function(op){
      if(op == 'post')
        return 'label-warning';
      else if(op == 'get')
        return 'label-success';
      else if(op == 'put')
        return 'label-info';
      else if(op == 'delete')
        return 'label-danger';
    }

}]);


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
    $scope.url = $scope.swaggerUrl = 'https://np16.ultipro.com/api-docs/swagger.json';
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
    };


    $scope.getUrl = function(parameters){
      var url = '';

      parameters.forEach(function(parameter){
          if (url.length != 0)
            url += "&";
          url += parameter.name + "={{value}}"
      });

      return url;
    };

    var paramsCache = {};

    $scope.getParamType = function(operation, type){
      if(paramsCache[operation.id + "_" + type] != null)
        return paramsCache[operation.id + "_" + type];

      var params = [];

      operation.parameters.forEach(function(parameter){
        if(parameter.in == type) {
          params.push(parameter)
        }
      });

      paramsCache[operation.name + "_" + type] = params;
      return params;
    }

}]);


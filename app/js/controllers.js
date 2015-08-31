'use strict';

var personalSiteController = angular.module('personalSiteControllers', []);

personalSite.controller("NavController", ['$scope', function($scope) {
  
  $scope.links = ['home', 'cv', 'projects', 'works', 'contact'];

}]);
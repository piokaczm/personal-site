'use strict';

var personalSiteController = angular.module('personalSiteControllers', []);

personalSiteController.controller("NavController", ['$scope', function($scope) {
  
  $scope.links = ['home', 'cv', 'projects', 'works', 'contact'];

}]);

personalSiteController.controller("CvController", ['$http', '$scope', function($http, $scope) {
  
  $http.get('json/cv.json').success(function(data) {
    $scope.cv = data;
    $scope.languages = $scope.cv.personal.languages.join(', ');
    $scope.technologies = $scope.cv.webDev.skills.list.join(', ');
  });
  
}]);
var personalSiteServices = angular.module('personalSiteServices', []);

personalSiteServices.factory('imageUrl', ['$http', function($http) {
  var jsonFile = $http.get("json/images.json").success(function(data) {
    return data;
  });
  var images = jsonFile.imageList
  var projectsImages = jsonFile.projectsList
  return {
    images, projectsImages
  };
}]);
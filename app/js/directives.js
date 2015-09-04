var personalSiteDirectives = angular.module('personalSiteDirectives', []);

personalSiteDirectives.directive('cvBullets', function() {
  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    templateUrl: 'partials/_cv-bullets.html'
  };
});

personalSiteDirectives.directive('subproject', function() {
  return {
    restrict: 'E',
    scope: {
      project: '='
      },
      controller: function($scope, $element) {
       $scope.img = 2;
       $scope.setFullImage = function(index) {
          $scope.img = index;
      }
    },
    templateUrl: 'partials/_subproject.html'
  };
});

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
    templateUrl: 'partials/_subproject.html'
  };
});

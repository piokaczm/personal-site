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
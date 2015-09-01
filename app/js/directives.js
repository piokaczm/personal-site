var personalSiteDirectives = angular.module('personalSiteDirectives', []);

personalSite.directive('cvBullets', function() {
  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    templateUrl: 'partials/_cv-bullets.html'
  };
});
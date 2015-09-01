'use strict';

// Declare app level module which depends on views, and components
var personalSite = angular.module('personalSite', [
  'ngRoute',
  'personalSiteControllers',
  'personalSiteDirectives'
]);

personalSite.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html'
  }).
  when('/cv', {
    templateUrl: 'partials/cv.html'
  }).
  when('/works', {
    templateUrl: 'partials/works.html'
  }).
  when('/contact', {
    templateUrl: 'partials/contact.html'
  }).
  when('/projects', {
    templateUrl: 'partials/projects.html'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);


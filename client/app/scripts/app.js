'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular
  .module('fantasyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    //================================================

    //================================================

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/fantasy', {
        templateUrl: 'views/fantasy.html',
        controller: 'FantasyCtrl'
      })
      .when('/models', {
        templateUrl: 'views/models.html',
        controller: 'ModelsCtrl'
      })
      .when('/smack', {
        templateUrl: 'views/smack.html',
        controller: 'SmackCtrl'
      })
      .when('/prediction', {
        templateUrl: 'views/prediction.html',
        controller: 'PredictionCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      })
      .otherwise({
        redirectTo: 'views/home.html'
      })

  }])
  .run(function ($rootScope) {
/*
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      if (!Auth.authorize(next.access)) {
        if(Auth.isLoggedIn()) $location.path('/');
        else                  $location.path('/login');
      }
    });
*/
  });

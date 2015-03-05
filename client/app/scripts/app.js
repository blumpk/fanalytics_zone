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
  .config(['$routeProvider', '$locationProvider', '$httpProvider',  function ($routeProvider, $locationProvider, $httpProvider) {

    //================================================
    // Check if the user is connected
    //================================================
    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user){
        // Authenticated
        if (user !== '0') {
          $scope.$apply(function() {
            $rootScope.authenticated = true;
          });
          console.log($rootScope.authenticated)
          /*$timeout(deferred.resolve, 0);*/
          deferred.resolve();
        }
        // Not Authenticated
        else {
          $rootScope.authenticated = false;
          $rootScope.message = 'You need to log in.';
          //$timeout(function(){deferred.reject();}, 0);
          deferred.reject();
          $location.url('/login');
        }
      });

      return deferred.promise;
    };
    //================================================

    //================================================
    // Add an interceptor for AJAX errors
    //================================================
    $httpProvider.interceptors.push(function($q, $location) {
      return {
        response: function(response) {
          // do something on success
          return response;
        },
        responseError: function(response) {
          if (response.status === 401)
            $location.url('/login');
          return $q.reject(response);
        }
      };
    });
    //================================================


    //================================================

    //================================================

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: { loggedin: checkLoggedin }
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
      .when('/fantasy/requests', {
        templateUrl: 'views/fantasy/requests.html',
        controller: 'RequestsCtrl'
      })
      .when('/fantasy/advice', {
        templateUrl: 'views/fantasy/advice.html',
        controller: 'AdviceCtrl'
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

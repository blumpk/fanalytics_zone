'use strict';

app.controller('FantasyCtrl', function($scope, $http) {

  $http.get('/players').
    success(function(data, status, headers, config) {
      $scope.teams = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });

  $scope.showList = function() {
    $http.get('/players').
      success(function(data, status, headers, config) {
        $scope.teams = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  };
/*
    if (Auth.signedIn()) {
        $location.path('/');
    }
    $scope.error = "";
    $scope.login = function() {
        Auth.login($scope.user).then(function () {
            $location.path('/');
        }, function(error) {
            $scope.error = error.toString();
        });
    };

    $scope.register = function () {
        Auth.register($scope.user).then(function(user) {
            return Auth.login($scope.user).then(function() {
                user.username = $scope.user.username;
                return Auth.createProfile(user);
            }).then(function() {
                $location.path('/');
            });
        }, function(error) {
            $scope.error = error.toString();
        });
    };
    */
});

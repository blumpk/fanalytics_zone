'use strict';

app.controller('FantasyCtrl', function($scope, $http) {


  $scope.showTeam = false;
  $scope.showPlayer = false;
  $scope.myTeam = [];

  $http.get('/profile/myTeam').
    success(function(data, status, headers, config) {
      $scope.myTeam = data;
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

  $scope.chooseTeam = function() {
    $http.get('/teams').
      success(function(data, status, headers, config) {
        $scope.teams = data;
        $scope.showTeam = true;
        $scope.showPlayer = false;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  };

  $scope.choosePlayers = function() {
    $http.get('/players').
      success(function(data, status, headers, config) {
        $scope.teams = data;
        $scope.showPlayer = true;
        $scope.showTeam = false;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  };

  $scope.addPlayer = function(player) {
    $scope.myTeam.push(player);
    $http.post('/profile/myTeam', player)
      .success(function(data, status, headers, config) {
        console.log("YAY");
      })
      .error(function(data, status, headers, config) {
        console.log("ERROR");
      });
  };

  $scope.saveTeam = function() {
    $http.post('/profile/myTeam', {"players" : $scope.myTeam})
      .success(function(data, status, headers, config) {
      console.log("YAY");
    })
      .error(function(data, status, headers, config) {
      console.log("ERROR");
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

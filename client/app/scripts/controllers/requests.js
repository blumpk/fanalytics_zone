'use strict';

app.controller('RequestsCtrl', function($scope, $http) {


  $scope.myTeam = [];
  $http.get('/profile/myTeam').
    success(function(data, status, headers, config) {
      $scope.myTeam = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  $scope.myQuestion = [];

  $scope.addPlayer = function(player) {
    $scope.myQuestion.push(player);
  };

});

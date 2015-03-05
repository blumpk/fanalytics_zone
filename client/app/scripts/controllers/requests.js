'use strict';

app.controller('RequestsCtrl', function($scope, $http) {


  $scope.myTeam = ["John Wall", "Kobe Bryant", "Anthony Davis", "LeBron James", "James Harden"];
  $scope.myQuestion = [];

  $scope.addPlayer = function(player) {
    $scope.myQuestion.push(player);
  };

});

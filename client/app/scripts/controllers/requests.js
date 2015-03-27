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

  $scope.subPlayer = function(player) {
    var index = $scope.myQuestion.indexOf(player)
    $scope.myQuestion.splice(index, 1);
  };

  $scope.comparePlayers = function() {
    var playerlist = [];
    for( var index in $scope.myQuestion ){
      playerlist.push($scope.myQuestion[index].PLAYER_ID);
    }
    $http.post('/profile/myQuestion', {"players": playerlist, "numSelect": 1})
      .success(function (data, status, headers, config) {
        console.log("YAY");
      })
      .error(function (data, status, headers, config) {
        console.log("ERROR");
      });
  }

});

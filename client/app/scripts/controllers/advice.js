app.controller('AdviceCtrl', function($scope, $http) {


  $scope.list = [];
  $scope.question = '';
  $http.get('/profile/myQuestion').
    success(function(data, status, headers, config) {
      $scope.list = data.data;
      $scope.question = data.question;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  $scope.num = 0;

  $scope.select = function(player) {
    $http.post('/profile/myAdvice', {"player": [player.PLAYER_ID], "question":$scope.question})
      .success(function (data, status, headers, config) {
        console.log("YAY");
      })
      .error(function (data, status, headers, config) {
        console.log("ERROR");
      });
  };

});

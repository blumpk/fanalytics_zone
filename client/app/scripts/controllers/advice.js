app.controller('AdviceCtrl', function($scope, $http) {


  $scope.list = [["John Wall", "Kobe Bryant"], ["Anthony Davis", "LeBron James", "James Harden"]];
  $scope.num = 0;

  $scope.update = function(player) {
    $scope.num += 1;
  };

});

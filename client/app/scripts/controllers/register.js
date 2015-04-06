'use strict';

app.controller('RegisterCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.register = function() {
      var result = Auth.register({
        username: $scope.user.username,
        email: $scope.user.email,
        password: $scope.user.password
      });
      console.log(result);
      $scope.isAuthenticated = true;
    };
  }]);

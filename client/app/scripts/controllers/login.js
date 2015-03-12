'use strict';

app.controller('LoginCtrl', function($scope, $location, Auth) {

  $scope.login = function() {
    Auth.login({
      username: $scope.user.email,
      password: $scope.user.password
    });
  };
});

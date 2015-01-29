'use strict';

app.controller('LoginCtrl', function($scope, $location, Auth) {

  $scope.login = function() {
    Auth.login({ email: $scope.email, password: $scope.password });
  };
});

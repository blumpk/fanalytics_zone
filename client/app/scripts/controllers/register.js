'use strict';

app.controller('RegisterCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.register = function() {
      Auth.register({
        email: $scope.user.email,
        password: $scope.user.password
      });
      $scope.isAuthenticated = true;
    };
  }]);

'use strict';

app.controller('RegisterCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.register = function() {
      console.log($scope.user);
      Auth.register({
        email: $scope.user.email,
        password: $scope.user.password
      });
    };
  }]);

'use strict';

app.controller('RegisterCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.register = function() {
      Auth.register({
        email: $scope.email,
        password: $scope.password
      });
    };
  }]);

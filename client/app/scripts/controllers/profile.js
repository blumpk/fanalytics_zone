'use strict';

app.controller('ProfileCtrl', function($scope, $http) {
$scope.profile = {}
  $http.get('/profile/myProfile').
    success(function(data, status, headers, config) {
      $scope.profile = data[0];
      console.log(data[0]);
      $scope.firstName = data[0].firstName;
      $scope.lastName = data[0].lastName;
      $scope.username = data[0].username;
      $scope.email = data[0].email;
    }).
    error(function(data, status, headers, config) {
      // log error
    });

});

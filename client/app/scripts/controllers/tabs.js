'use strict';

app.controller('TabsCtrl', function($scope, $location) {

  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

});

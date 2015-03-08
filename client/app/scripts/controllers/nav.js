'use strict';

app.controller('NavCtrl', ['$scope', '$q', '$http','Auth', function ($scope, $q, $http,  Auth) {

  $scope.signedIn = false;
  //$scope.signedIn = Auth.isloggedin();
  var deferred = $q.defer();

  // Make an AJAX call to check if the user is logged in
  $http.get('/loggedin').success(function(user){

    // Authenticated
    if (user !== '0') {
      $scope.signedIn = true;
      console.log(user);
    }
    // Not Authenticated
    else {
      $scope.signedIn = false;
    }
    console.log($scope.signedIn);
  });

  $scope.logout = Auth.logout();

  /*
  $scope.post = {url: 'http://', title: ''};
  $scope.user = Auth.user;

  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.submitPost = function () {
    $scope.post.creator = $scope.user.profile.username;
    $scope.post.creatorUID = $scope.user.uid;
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    });
  };
  */
}]);

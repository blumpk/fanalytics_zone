'use strict';

app.controller('ArticlesCtrl', function($scope, $http) {

  $scope.listArticles = [];
  $http.get('/articles')
    .success(function(data, status, headers, config) {
    $scope.listArticles = data;
  }).
    error(function(data, status, headers, config) {
      // log error
    });

  $scope.showAddArticle = false;
  $scope.addArticle = function() {
    $scope.showAddArticle = ~$scope.showAddArticle;
  }

  $scope.postArticle = function() {
    var text = $scope.post.text;
    var title = $scope.post.title;
    $http.post('/profile/postArticle', {"text" : text, "title": title})
      .success(function(data, status, headers, config) {
        console.log("YAY");
      })
      .error(function(data, status, headers, config) {
        console.log("ERROR");
      });
  }

  $scope.postComment = function(article) {
    article.comments.push({"comment": article.comment, "time": Date.now()});
    $http.post('/profile/postComment',{"articleid": article._id, "comment": article.comment})
      .success(function(data, status, headers, config) {
        article.comments.push({"user": 0 , "comment": article.comment, "time": Date.now()});
        console.log("YAY");
      })
      .error(function(data, status, headers, config) {
        console.log("ERROR");
      });
  }
});

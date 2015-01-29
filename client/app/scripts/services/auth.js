app.factory('Auth', ['$http', '$location', '$rootScope', '$cookieStore',
    function($http, $location, $rootScope, $cookieStore) {
      $rootScope.currentUser = $cookieStore.get('user');
      $cookieStore.remove('user');

      return {
        login: function(user) {
          return $http.post('/login', user)
            .success(function(data) {
              $rootScope.currentUser = data;
              $location.path('/');

            })
            .error(function() {
            });
        },
        register: function(user) {
          return $http.post('/register', user)
            .success(function() {
              $location.path('/');
            })
            .error(function(response) {
            });
        },
        logout: function() {
          return $http.get('/api/logout').success(function() {
            $rootScope.currentUser = null;
            $cookieStore.remove('user');
          });
        }
      };
    }]);

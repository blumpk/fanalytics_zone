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
              $rootScope.authenticated = true;

            })
            .error(function() {
              $rootScope.authenticated = false;
            });
        },
        register: function(user) {
          return $http.post('/register', user)
            .success(function() {
              $location.path('/');
              $rootScope.authenticated = true;
            })
            .error(function(response) {
              $rootScope.authenticated = false;
            });
        },
        logout: function() {
          return $http.get('/api/logout').success(function() {
            $rootScope.currentUser = null;
            $rootScope.authenticated = false;
            $cookieStore.remove('user');
          });
        }
      };
    }]);

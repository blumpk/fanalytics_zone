app.factory('Auth', ['$http', '$location', '$rootScope', '$cookieStore',
    function($http, $location, $rootScope, $cookieStore, $q) {
      $rootScope.currentUser = $cookieStore.get('user');
      //var authenticated = false;

      return {
        login: function(user) {
          return $http.post('/login', user)
            .success(function(data) {
              $rootScope.currentUser = data;
              $location.path('/');
              this.authenticated = true;
              console.log(this.authenticated);

            })
            .error(function() {
              this.authenticated = false;
            });
        },
        isloggedin: function() {
          return $http.get('/loggedin').then(function(user) {
            console.log(user);
            return user != 0;
          })
        },
        register: function(user) {
          return $http.post('/register', user)
            .success(function() {
              $location.path('/');
              this.authenticated = true;
            })
            .error(function(response) {
              console.log(response);
              this.authenticated = false;
            });
        },
        logout: function() {
          return $http.get('/logout').success(function() {
            $rootScope.currentUser = null;
            this.authenticated = false;
            $cookieStore.remove('user');
          });
        },
        authenticated: false
      };
    }]);

'use strict';

app.controller('LoginCtrl', function ($scope, Auth, $state, $sanitize) {
  $scope.loginUser = function (credentials) {
  	credentials = $sanitize(credentials)
    Auth.login(credentials)
    .then(function (loggedinUser) {
      $state.go('user', {id: loggedinUser.id});
    });
  };
});

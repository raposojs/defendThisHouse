'use strict';

app.controller('SignupCtrl', function ($scope, Auth, $state, $sanitize) {
  $scope.signupUser = function (credentials) {
  	credentials = $sanitize(credentials)
    Auth.signup(credentials)
    .then(function (loggedinUser) {
      $state.go('user', {id: loggedinUser.id});
    });
  };
});

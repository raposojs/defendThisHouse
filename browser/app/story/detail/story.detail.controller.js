'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users, $sanitize) {
  $scope.story = $sanitize(story);
  $scope.users = $sanitize(users);
  $scope.$watch('story', function () {
    $scope.story.save();
  }, true);
});

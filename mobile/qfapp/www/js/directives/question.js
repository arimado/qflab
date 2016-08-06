angular.module('qff.directives')
.directive('question', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'data': '=data'
    },
    templateUrl: 'templates/directives/question.html'
  };
})

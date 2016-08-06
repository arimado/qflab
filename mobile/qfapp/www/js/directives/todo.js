angular.module('qff.directives')

.directive('todo', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'data': '=data'
    },
    templateUrl: 'templates/directives/todo.html'
  };
});
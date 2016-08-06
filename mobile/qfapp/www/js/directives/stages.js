angular.module('qff.directives')

.directive('preflight', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'days': '=days',
      'destination': '=destination',
      'airport': '=airport',
      'tasks': '=tasks',
      'share': '&share'
    },
    templateUrl: 'templates/directives/stage.preflight.html'
  };
})
.directive('checkin', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'airport': '=airport',
      'airportname': '=airportname',
      'gate': '=gate',
      'terminal': '=terminal'
    },
    templateUrl: 'templates/directives/stage.checkin.html'
  };
});
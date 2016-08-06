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
      'location': '=location',
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
})
.directive('transfer', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'airport': '=airport',
      'airportname': '=airportname',
      'gate': '=gate',
      'terminal': '=terminal',
      'type': '=type'
    },
    templateUrl: 'templates/directives/stage.transfer.html',

    controller: function ($scope) {
        var timer = {
            minutes: 47,
            seconds: 32
        }
        setInterval(function(){
            if (timer.seconds > 0) {
                timer.seconds -= 1;
            } else {
                timer.minutes -= 1;
                timer.seconds = 60;
            }
            $scope.$apply() 
        }, 1000)
        $scope.timer = timer;
    }
  };
})

;

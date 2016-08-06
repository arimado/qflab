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
      'ideas': '=ideas',
      'location': '=location',
      'share': '&share',
      'completed': '=completed'
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
      'location': '=location',
      'terminal': '=terminal',
      'completed': '=completed'
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
      'location': '=location',
      'type': '=type',
      'completed': '=completed',
      'ideas': '=ideas',
      'tasks': '=tasks'
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

        document.getElementById('#actionButton')

    }
  };
})
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover',
            'background-repeat': 'no-repeat'
        });
    };
)
.directive('timer', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            initMins: '=mins',
            initSeconds: '=',

        }
    }
})
;

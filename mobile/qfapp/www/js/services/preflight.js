angular.module('qff.services')

.factory('todo', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [{
    id: 0,
    name: 'I have packed my passport',
    link: 'http://uk.embassy.gov.au/lhlh/immi_travel.html',
    checked: true,
    icon: 'paper'
  },
  {
    id: 1,
    name: 'My passport is valid for another 6 months',
    link: 'http://uk.embassy.gov.au/lhlh/immi_travel.html',
    checked: false,
    icon: 'paper'
  },
  {
    id: 2,
    name: 'I have a valid ESTA to enter the USA,',
    link: 'http://uk.embassy.gov.au/lhlh/immi_travel.html',
    checked: false,
    icon: 'paper'
  }];

  return {
    all: function() {
      return tasks;
    },
    complete: function(task){
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          task.complete = true;
          tasks[i] = task ;
        }
      }
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
})
.factory('question', function() {
    var questions = [
        {
            id: 0,
            question: "I've lost my passport",
            answer: "It's always in the last place you look!"
        },
        {
            id: 1,
            question: "Where is the gate?",
            answer: "It's always in the last place you look!"
        },
        {
            id: 2,
            question: "I'm all out of love.",
            answer: "It's always in the last place you look!"
        },
    ]
    return {
        all: function() {
            return questions;
        },
        get: function(id) {
          for (var i = 0; i < questions.length; i++) {
            if (questions[i].id === parseInt(id)) {
              return questions[i];
            }
          }
          return null;
        }
    }
})
.factory('tasks', function() {
    var tasks= [];
    tasks.lax = [
        {
            icon: "fa fa-suitcase",
            text: "Collect your luggage from carousel 3"
        },
        {
            icon: "fa fa-suitcase",
            text: "Go back through immigration and customs, put your baggage in the transfer area"
        },
        {
            icon: "fa fa-bus",
            text: "Walk to terminal 3, or get the free shuttle bus"
        },
        {
            icon: "fa fa-ticket",
            text: "Go through Domestic departures"
        },
        {
            icon: "fa fa-plane",
            text: "Go to gate B17"
        },
    ];

    return {
        all: function() {
            return tasks;
        }
    }
})
.factory('ideas', function() {
    var ideas= [];
    ideas.lax = [
        {
            icon: "ion-ios-wineglass",
            text: "Your Qantas FF get's you access to the American Airlines Admirals Club in Terminal 4"
        },
    ];
    ideas.syd = [
        {
            icon: "ion-ios-wineglass",
            text: "Your Qantas FF get's you access to the Qantas Club near the duty free"
        },
        {
            icon: 'ion-android-restaurant',
            text: 'If you fancy something different for lunch, Qantas Platinum members get 20% off at the bank st. diner'
        }
    ];
    ideas.preflight = [
      {
        icon: 'ion-happy-outline',
        text: 'You\'ve got some big flights ahead, why don\'t you do some pre-flight exercise?'
      },
      {
        icon: 'ion-earth',
        text: 'You only have 1h45m to transfer at LA, why don\'t you consider getting a later transfer and checking out some of the sights in Los Angeles?',
        link: 'http://travelinsider.qantas.com.au/north-america/usa/los-angeles'
      }
    ];
    return {
        all: function() {
            return ideas;
        }
    }
});

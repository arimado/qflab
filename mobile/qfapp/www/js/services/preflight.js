angular.module('qff.services', [])

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
            id: 0,
            question: "Where is the gate?",
            answer: "It's always in the last place you look!"
        },
        {
            id: 0,
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
});

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
});

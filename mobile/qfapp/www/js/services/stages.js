angular.module('qff.services')

.factory('stages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stages = [{
    id: 0,
    type: 'preflight',
    days: 2,
    airport: 'sydney',
    destination: 'usa',
    location: 'Avoca Beach, NSW'
  },
  {
    id: 1,
    type: 'checkin',
    airport: 'syd',
    airportname: 'Sydney Kingsford Smith (International)',
    terminal: '1',
    gate: 'J16'
    },
  {
    id: 2,
    type: 'transfer',
    transfertype: 'International',
    airport: 'usa',
    airportname: 'LAX (International)',
    terminal: '2',
    gate: 'A56'
  }
  ];

  return {
    all: function() {
      return stages;
    }
  }});
angular.module('qff.services')

.factory('stages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stages = [];
  stages['ant'] = [{
    id: 0,
    type: 'preflight',
    days: 2,
    airport: 'sydney',
    destination: 'usa',
    location: 'Avoca Beach, NSW',
    completed: true,
  },
  {
    id: 1,
    type: 'checkin',
    airport: 'syd',
    airportname: 'Sydney Kingsford Smith (International)',
    location: 'Airport drive, Mascot, NSW',
    terminal: '1',
    gate: 'J16',
    completed: true,
    },
  {
    id: 2,
    type: 'transfer',
    transfertype: 'International',
    airport: 'lax',
    airportname: 'LAX (International)',
    location: 'South LA, USA',
    terminal: '2',
    gate: 'A56',
    current: true,
    completed: false,
    deptime: '10:55 AM',
    arrtime: '13:45 PM',
    traveltime: '2h50m',
  },
  {
    id: 3,
    type: 'checkin',
    airport: 'lax',
    airportname: 'LAX',
    location: 'South LA, USA',
    terminal: '4',
    gate: 'J16',
    completed: false,
    },
     {
    id: 4,
    type: 'flight',
    airport: 'lax',
    airportname: 'LAX',
    dest: 'sfo',
    destination: 'San Francisco, USA',
    location: 'San Francisco, USA',
    deptime: '10:55 AM',
    arrtime: '13:45 PM',
    traveltime: '2h50m',
    terminal: '4',
    gate: 'J16',
    completed: false,
    },
      {
        id: 5,
        type: 'transfers',
        transfertype: 'International',
        airport: 'lax',
        airportname: 'asdasdasdasd',
        location: 'asdasdasdasd',
        terminal: '2',
        gate: 'A56',
        completed: false,
        destination: 'San Francisco, USA',
        location: 'San Francisco, USA',
        deptime: '10:55 AM',
        arrtime: '13:45 PM',
        traveltime: '2h50m',
      }
  ];

  return {
    all: function(person) {
      return stages[person];
    }
  }});

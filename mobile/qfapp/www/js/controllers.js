angular.module('qff.controllers', [])
.controller('DashCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope) {
    $scope.messages = [
      {type:'user',
      text: "Hi Bobby, I've been waiting for my luggage for over an hour!"},
      {type: 'operator',
      text: "It should be there. Let me check the database."}
     ];
    $scope.sendMessage = function() {
      $scope.messages.push( {
        type: 'user',
        text: $scope.text
      });
      $scope.text = '';
      setTimeout($scope.generateResponse, 1000);
    };
    $scope.generateResponse = function(){
      messages = [
        'Sorry to hear that Amanda, have you notified ground staff?',
        'Thanks for the update, do you have your baggage receipt number? It should be on your boarding pass.'
      ];
      var rand = messages[Math.floor(Math.random() * messages.length)];
      $scope.messages.push( {
        type:'operator',
        text: rand});
      $scope.$apply();
    };
  })
.controller('StoryCtrl', function($scope, $location, $state, $ionicScrollDelegate, todo, tasks, stages, question, ideas) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.person = 'ant';
  $scope.stages = stages.all($scope.person);
  $scope.todo = todo.all();
  $scope.tasks = tasks.all();
  $scope.ideas = ideas.all();
  $scope.questions = question.all();

  $scope.navigateTo = function (path) {
      console.log('navigate')
      $state.go("tab.chats")
  }

  $scope.remove = function(task) {
    todo.remove(task);
  };

  $scope.scrollTo = function (id) {
      $location.hash(id);
      var delegateHandle = $ionicScrollDelegate.$getByHandle('storyView');
      delegateHandle.anchorScroll(id);
  };

  $scope.share = function() {

  $scope.change = function(){
    $scope.stages = stages.all($scope.person);
    $scope.$apply();
  };

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

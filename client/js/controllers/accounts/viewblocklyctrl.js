//viewblocklyctrl controller
angular.module('yetibox').controller('viewblocklyctrl', ['$scope', '$meteor', '$rootScope', 'Blockly', '$timeout', '$stateParams',
  function($scope, $meteor, $rootScope, Blockly, $timeout, $stateParams){

  var getworkspace    = $rootScope.currentUser.profile.blockly[parseInt($stateParams.id)];
  var workspacetoser  = angular.fromJson(getworkspace);
  $scope.blockname    = getworkspace.title;
  console.log( getworkspace );

  // This is wrapped in timeout to allow the directive to load.
  console.log( $stateParams.id );


  $timeout(function () {
      Blockly.setWorkspace(workspacetoser);
      Blockly.onChange(function (workspace) {
          document.getElementById('source').innerHTML = angular.toJson(workspace, true);
      });
  }, 0);
  $scope.SaveToaccount = function(){
    var workspace                             = Blockly.getWorkspace();
    var blockname                             = $scope.blockname;
    workspace.block[0].title                  = blockname;
    workspace.block[0].pageid                 = $stateParams.id;
    var newblock                              = {};

    newblock["profile.blockly." + $stateParams.id] = workspace.block[0];
    console.log( $stateParams.id )

    Meteor.users.update(
      {_id: Meteor.userId()},
      { $set: newblock}
    );

    $scope.distitle = false;
    console.log( $rootScope.currentUser );

  };

}]);

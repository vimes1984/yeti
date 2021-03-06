//NewBlocklyCtrl controller
angular.module('yetibox').controller('NewBlocklyCtrl', ['$scope', '$meteor', '$rootScope', 'Blockly', '$timeout',
  function($scope, $meteor, $rootScope, Blockly, $timeout){

  var blockCount                            = Object.keys($rootScope.currentUser.profile.blockly).length;

  $scope.distitle = false;
  // This is wrapped in timeout to allow the directive to load.
  console.log( $rootScope.currentUser );
  $timeout(function () {
      Blockly.onChange(function (workspace) {
          document.getElementById('source').innerHTML = angular.toJson(workspace, true);
      });
  }, 0);


  $scope.SaveToaccount = function(){
    var workspace                          = Blockly.getWorkspace();
    var blockname                          = $scope.blockname;
    var savearray                          = {};
    savearray.workspace                    = angular.toJson(workspace);
    savearray.title                        = blockname;
    savearray.pageid                       = blockCount;
    var newblock                           = {};
    var tojs                               = Blockly.saveToJS(workspace);
    savearray.jscodejson                   = JSON.stringify(tojs);
    console.log( Blockly.saveToJS(workspace) );

    newblock["profile.blockly." + blockCount] = savearray;
    console.log( blockCount );

    Meteor.users.update(
      {_id: Meteor.userId()},
      { $set: newblock}
    );
        $scope.showalert    = true;
        $scope.alertclass   = 'success';
        $scope.message      = 'Saved to account';
    $scope.distitle = false;
    console.log( $rootScope.currentUser );

  };

}]);

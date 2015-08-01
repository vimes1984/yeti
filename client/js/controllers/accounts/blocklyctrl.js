//blocklyctrl controller
angular.module('yetibox').controller('blocklyctrl', ['$scope', '$meteor', '$rootScope', 'Blockly', '$timeout',
  function($scope, $meteor, $rootScope, Blockly, $timeout){
  //$rootScope.currentUser.blockly  = [];
  // This is wrapped in timeout to allow the directive to load.
  $timeout(function () {
      Blockly.onChange(function (workspace) {
          document.getElementById('source').innerHTML = angular.toJson(workspace, true);
      });
  }, 0);


  $scope.SaveToaccount = function(){
    var workspace                   = Blockly.getWorkspace();

    $rootScope.currentUser.blockly.push(workspace.block);
    console.log( $rootScope.currentUser );
    console.log( Blockly.getWorkspace() );

  };

}]);

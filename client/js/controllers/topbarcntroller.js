
//topbarcntroller controller
angular.module('yetibox').controller('topbarcntroller', ['$scope', '$meteor', '$state', '$rootScope', function($scope, $meteor, $state, $rootScope){

  $scope.signOut   = function(){
    $meteor.logout().then(function(){
          $state.go('home');
      }, function(err){});
  };

  $scope.showhideadminbar = function(){
    //no user not logged in
    if($rootScope.currentUser === null){
      $scope.showadminurl = false;
      return;
    }
    //user check if they are Superadmin
    if($rootScope.currentUser.roles[0] === 'druidae'){
      $scope.showadminurl = true;
    }else{
      $scope.showadminurl = false;

    }
  };
  $scope.showhideadminbar();

}]);


//topbarcntroller controller
angular.module('yetibox').controller('topbarcntroller', ['$scope', '$meteor', '$state', '$rootScope', function($scope, $meteor, $state, $rootScope){

  $scope.signOut   = function(){
    $meteor.logout().then(function(){
          $state.go('home');
          $(document).foundation('reflow');
      }, function(err){});
  };
  console.log($rootScope.currentUser);
  $scope.$watch($rootScope.currentUser,function(){

    if($rootScope.currentUser){
      $scope.showmenu = true;
    }else{
      $scope.showmenu = false;
    }
      $(document).foundation('reflow');
  });
  $scope.showhideadminbar = function(){
    //no user not logged in
    if($rootScope.currentUser === null){
      $scope.showadminurl = false;
      return;
    }
    //user check if they are Superadmin
    if($rootScope.currentUser.roles[0] === 'druidae' || $rootScope.currentUser.roles[0] === 'super-admin'){
      $scope.showadminurl = true;
    }else{
      $scope.showadminurl = false;
    }
  };
  $scope.showhideadminbar();

}]);

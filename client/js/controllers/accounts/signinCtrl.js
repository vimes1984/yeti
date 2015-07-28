//helpsurvival controller
angular.module('yetibox').controller('signinCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){
  //default values
  $scope.user   = {};
        console.log('test');

  //Sign user in
  $scope.signin = function(){
      $meteor.loginWithPassword($scope.user.name, $scope.user.password).then(
        function(){
            $state.go('account');
        }, function(err){
          console.log('logout error - ', err);
        });
  };

}]);

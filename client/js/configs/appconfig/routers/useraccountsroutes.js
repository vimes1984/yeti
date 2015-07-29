

angular.module('yetibox').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){
    $stateProvider
    .state('signin', {
        url: '/sign-in',
        templateUrl: 'client/templates/accounts/signin.ng.html',
        controller: 'signinCtrl'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'client/templates/accounts/register.ng.html',
        controller: 'registerCtrl'
    })
    .state('resetpassword', {
        url: '/resetpassword',
        templateUrl: 'client/templates/accounts/resetpassword.ng.html',
        controller: 'resetpasswordCtrl'
    })
    .state('account', {
        url: '/my-account',
        templateUrl: 'client/templates/accounts/myaccount.ng.html',
        controller: 'accountctrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            }
    });

}]);
angular.module('yetibox').run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function(){
    $(document).foundation('reflow');
  });
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $meteor.requireUser() promise is rejected
    // and redirect the user back to the login page
    if (error === "AUTH_REQUIRED") {
        // It is better to use $state instead of $location. See Issue #283.
        $state.go('signin');
    }
  });
}]);

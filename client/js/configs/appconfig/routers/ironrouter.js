// all of these are here so our routing doesn't interfere with the admin stuff
angular.module('yetibox').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $stateProvider
    .state('admin', {
      url: '/admin',
      name: 'admin'
    })
    .state('admin/my-account', {
      url: '/admin/my-account',
      name: 'adminaccount'
    });
}]);
// run block to cat all admin urls...

angular.module('yetibox').run(['$rootScope', '$window', function($rootScope, $window) {
  // you can inject any instance here
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.log(event);
    console.log(toState);

  });

}]);

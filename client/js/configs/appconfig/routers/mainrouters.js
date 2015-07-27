Router.route('/(.*)', function(){
  this.render('mainview');
});
angular.module('yetibox').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'client/templates/home.ng.html',
      controller: 'HomeCtrl'
    })
      .state('help', {
        url: '/help',
        templateUrl: 'client/templates/help.ng.html',
        controller: 'HelpController'
      })
      .state('helpsurvival', {
        url: '/universes/helpsurvival',
        templateUrl: 'client/templates/universes/helpsurvival.ng.html',
        controller: 'helpsurvivalCtrl'
      })
      .state('whatsurvival', {
        url: '/universes/whatsurvival',
        templateUrl: 'client/templates/universes/whatsurvival.ng.html',
        controller: 'whatsurvivalCtrl'
      })
      .state('gladwhatpvp', {
        url: '/universes/gladwhatpvp',
        templateUrl: 'client/templates/universes/gladwhatpvp.ng.html',
        controller: 'gladwhatpvpCtrl'
      })
      .state('helpglad', {
        url: '/universes/helpglad',
        templateUrl: 'client/templates/universes/helpglad.ng.html',
        controller: 'helpgladCtrl'
      });
}]);
// all of these are here so our routing doesn't interfere with the admin stuff
angular.module("yetibox").run(function($rootScope, $location, $state) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    //This is to not interfere with Houston Admin
    console.log()
    if(toState.name == "admin1" || toState.name == "admin2"){
      event.preventDefault();
    }
  });
});

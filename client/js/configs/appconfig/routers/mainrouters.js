

angular.module('yetibox').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
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

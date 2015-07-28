angular.module('yetibox').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){
    $stateProvider
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

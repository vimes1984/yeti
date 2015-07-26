angular.module("yetibox").config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                template: UiRouter.template('home.html')
            })
           .state('state1', {
              url: "/state1",
              template: UiRouter.template('state1.html')
           });
    }
]);

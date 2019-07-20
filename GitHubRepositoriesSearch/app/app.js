

var App = angular.module('app', ['ui.router', 'ngRoute']);

App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider

        .state('default', {
            url: "/",
            templateUrl: "/app/gitHubRepositories/gitHubRepositories.html",
            controller:"gitHubRepositories as vm",
        })
        .state('gitHubRepositories', {
            url: "/gitHubRepositories",
            templateUrl: "/app/gitHubRepositories/gitHubRepositories.html",
            controller:"gitHubRepositories as vm",

        })

    $urlRouterProvider.otherwise("/gitHubRepositories");
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});


}]);
App.constant('appSetting', {
    gitHubBaseUrl: 'https://api.github.com/search/repositories?q=',
    apiBaseUrl: 'https://localhost:44359/',
})


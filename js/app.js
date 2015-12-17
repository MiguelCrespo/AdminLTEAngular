angular.module('admin', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url: "",
        templateUrl: "js/components/app/app.html",
        abstract: true
    }).state('app.home', {
        url: "/",
        templateUrl: "js/components/home/home.html"
    });

    $urlRouterProvider.otherwise('/');
}).run(function () {

});
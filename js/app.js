angular.module('admin', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "/",
        templateUrl: "js/components/home/home.html"
    });

    $urlRouterProvider.otherwise('/');
}).run(function () {

});
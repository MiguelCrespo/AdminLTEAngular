angular.module('admin', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}).run(function () {

});
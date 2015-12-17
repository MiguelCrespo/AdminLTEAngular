/**
 * Created by Miguel on 12/17/15.
 */
var menuDirective = function () {
    return {
        restrict: 'EA',
        templateUrl: 'js/components/menu/menu.html',
        controller: function ($scope) {

        }, link: function ($scope, elem, attrs) {
        }
    }
};

angular.module('admin').directive('adminMenu', menuDirective);
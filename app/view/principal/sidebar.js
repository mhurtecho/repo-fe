'use strict';

var mod = angular.module('app.principal.sidebar', []);

mod.controller('SidebarCtrl', ['$scope', SidebarCtrl]);

function SidebarCtrl($scope) {
    $scope.user = $scope.shared.obj;
}

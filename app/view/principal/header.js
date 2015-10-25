'use strict';

var mod = angular.module('app.principal.header', []);

mod.controller('HeaderCtrl', ['$scope', HeaderCtrl]);

function HeaderCtrl($scope) {
    $scope.user = $scope.shared.obj;
}

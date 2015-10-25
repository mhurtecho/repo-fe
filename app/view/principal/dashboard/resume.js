'use strict';

var mod = angular.module('app.dashboard.resume', []);

mod.controller('ResumeCtrl', ['$scope', ResumeCtrl]);

function ResumeCtrl($scope) {
    $scope.panelName = 'Dashboard';
}

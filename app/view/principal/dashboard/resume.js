'use strict';

var mod = angular.module('app.dashboard.resume', []);

mod.controller('ResumeCtrl', ['$scope', ResumeCtrl]);

function ResumeCtrl($scope) {

    $scope.init = function () {
        $scope.overview.array = [
            {name: 'Dashboard', class: 'fa fa-laptop'}
        ];
    };

    $scope.init();
}

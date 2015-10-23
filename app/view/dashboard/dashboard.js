/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

angular.module('appZero')

    .controller('DashboardCtrl', ['$scope', 'shared', function ($scope, shared) {
        $scope.user = shared.obj;
        //$scope.$state = $state;
    }]);

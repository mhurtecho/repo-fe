/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

var mod = angular.module('app.dashboard',
    [
        'ui.router',
        'app.dashboard.resume',
        'app.dashboard.form',
        'app.dashboard.table'
    ]
);

mod.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    parent: 'principal.dashboard',
                    templateUrl: 'view/principal/dashboard/resume.html',
                    controller: 'ResumeCtrl'
                })
                .state('form', {
                    url: '/form',
                    abstract: true,
                    parent: 'principal.dashboard',
                    templateUrl: 'view/principal/form/form.html'
                })
                .state('table', {
                    url: '/table',
                    abstract: true,
                    parent: 'principal.dashboard',
                    templateUrl: 'view/principal/table/table.html'
                });
        }
    ]
);

mod.controller('DashboardCtrl', ['$scope', '$state', DashboardCtrl]);

function DashboardCtrl($scope) {
    $scope.user = $scope.shared.obj;
    $scope.overview = {};

    /**
     * Sidebar Toggle
     */
    var mobileView = 768;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue <= mobileView) {
            $scope.sidebar = true;
        } else {
            $scope.sidebar = false;
        }
    });

    $scope.toggleSidebar = function () {
        $scope.sidebar = !$scope.sidebar;
    };

    window.onresize = function () {
        $scope.$apply();
    };

}

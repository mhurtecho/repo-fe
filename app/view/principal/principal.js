'use strict';

var mod = angular.module('app.principal', [
        'ui.router',
        'app.principal.header',
        'app.principal.sidebar',
        'app.dashboard'
    ]
);

mod.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('principal', {
                    abstract: true,
                    views: {
                        '': {
                            templateUrl: 'view/principal/principal.html',
                            controller: 'PrincipalCtrl'
                        },
                        '_header@principal': {
                            templateUrl: 'view/principal/header.html',
                            controller: 'HeaderCtrl'
                        },
                        '_sidebar@principal': {
                            templateUrl: 'view/principal/sidebar.html',
                            controller: 'SidebarCtrl'
                        }
                    }
                })
                .state('principal.dashboard', {
                    url: '/dashboard',
                    abstract: true,
                    templateUrl: 'view/principal/dashboard/dashboard.html',
                    controller: 'DashboardCtrl'
                }
            );
        }
    ]
);

mod.controller('PrincipalCtrl', ['$scope', PrincipalCtrl]);

function PrincipalCtrl($scope) {
    $scope.user = $scope.shared.obj;

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

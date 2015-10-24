/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'shared', DashboardCtrl]);

function DashboardCtrl($scope, shared) {
    $scope.user = shared.obj;
    //$scope.$state = $state;

    /**
     * Sidebar Toggle
     */
    var mobileView = 768;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue <= mobileView) {
            $scope.toggleSidebar = true;
        } else {
            $scope.toggleSidebar = false;
        }
    });

    $scope.toggleSidebarFunction = function () {
        $scope.toggleSidebar = !$scope.toggleSidebar;
    };

    window.onresize = function() {
        $scope.$apply();
    };

    /**
     * Profile Toggle
     */
    $scope.toggleProfileFunction = function () {
        $scope.toggleProfile = !$scope.toggleProfile;
    };

    /**
     * Menu Toggle
     */
    $scope.toggleMenu1 = function () {
        $scope.menu1 = !$scope.menu1;
    };
    $scope.toggleMenu2 = function () {
        $scope.menu2 = !$scope.menu2;
    };
    $scope.toggleMenu3 = function () {
        $scope.menu3 = !$scope.menu3;
    };
}

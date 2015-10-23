/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

angular.module('appZero')

    .controller('LoginCtrl',
    [ '$scope', '$location', 'shared', function($scope, $location, shared) {
        $scope.loginError = '';
        //$scope.user = 'test';
        //$scope.pass = 'test';
        $scope.submit = function() {
            if ($scope.user == 'test' && $scope.pass == 'test') {
                shared.obj = $scope.user;
                $location.path('/dashboard');
            } else {
                $scope.loginError = 'login error';
            }

            return false;
        }
    } ]);
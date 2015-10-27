/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

angular.module('app.login', [
        'ui.router',
        'app.principal'
    ]
)
    .controller('LoginCtrl',
    ['$scope', function ($scope) {
        $scope.loginError = '';
        //$scope.user = 'test';
        //$scope.pass = 'test';
        $scope.submit = function () {
            if ($scope.user == 'test' && $scope.pass == 'test') {
                $scope.shared.obj = $scope.user;
                $scope.$state.go('home');
            } else {
                $scope.loginError = 'login error';
            }

            return false;
        }
    }]);
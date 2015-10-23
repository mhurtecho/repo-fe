/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

var _app = angular.module('appZero', [
    'ui.router'//,
   // 'app.login',
   // 'app.dashboard'
]);

_app.config(function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/login');

$stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'view/login/login.html',
        controller: 'LoginCtrl'
    })
    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'view/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    });
});

_app.factory('shared', function () {
    return {
        obj: {
            user: ''
        }
    };
});
/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

var app = angular.module('app', [
    'ui.router',
    'app.login',
    'app.dashboard'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

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

app.factory('shared', function () {
    return {
        obj: {
            user: ''
        }
    };
});
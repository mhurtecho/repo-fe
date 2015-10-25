'use strict';

angular.module('app.dashboard.form', ['ui.router'])

    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('form.component', {
                    url: '/component',
                    parent: 'form',
                    templateUrl: 'view/principal/form/component.html',
                    controller: 'ResumeCtrl'
                })
                .state('form.validation', {
                    url: '/validation',
                    parent: 'form',
                    templateUrl: 'view/principal/form/validation.html'
                });
        }
    ]
)
    .controller('FormCtrl',
    ['$scope', function ($scope) {

    }]);

'use strict';

angular.module('app.dashboard.form', [
        'ui.router',
        'app.dashboard.form.component',
        'app.dashboard.form.validation'
    ]
)

    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('form.component', {
                    url: '/component',
                    parent: 'form',
                    templateUrl: 'view/principal/form/component.html',
                    controller: 'FormComponentCtrl'
                })
                .state('form.validation', {
                    url: '/validation',
                    parent: 'form',
                    templateUrl: 'view/principal/form/validation.html',
                    controller: 'FormValidationCtrl'
                });
        }
    ]
)
    .controller('FormCtrl',
    ['$scope', function ($scope) {

    }]);

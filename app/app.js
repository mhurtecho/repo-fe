/**
 * Created by mhurtecho on 22/10/15.
 */
'use strict';

var app = angular.module('app', [
    'ui.router',
    'app.login'
]);

app.factory('shared', function () {
    return {
        obj: {
            user: ''
        }
    };
});

app.run(
    ['$rootScope', '$state', '$stateParams', 'shared',
        function ($rootScope, $state, $stateParams, shared) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.shared = shared;
        }
    ]
);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('/', '/login')
            .otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'view/login/login.html',
                controller: 'LoginCtrl'
            });
    }
    ]
);
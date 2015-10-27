'use strict';

angular.module('app.dashboard.table', [
        'ui.router',
        'app.dashboard.table.product'
    ]
)

    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('table.product', {
                    url: '/product',
                    parent: 'table',
                    templateUrl: 'view/principal/table/product.html',
                    controller: 'TableProductCtrl'
                });
        }
    ]
)
    .controller('TableCtrl',
    ['$scope', function ($scope) {

    }
    ]
);

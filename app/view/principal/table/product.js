'use strict';

angular.module('app.dashboard.table.product', ['productService'])

    .controller('TableProductCtrl',
    ['$scope', 'Product', function ($scope, Product) {

        $scope.init = function () {
            $scope.overview.array = [
                {name: 'Table Product', class: 'fa fa-th-list'},
                {name: 'Table', class: 'fa fa-table'}
            ];
        };

        $scope.init();

        $scope.products = Product.query();
    }
    ]
);
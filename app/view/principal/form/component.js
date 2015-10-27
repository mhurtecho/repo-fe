'use strict';

angular.module('app.dashboard.form.component', [])

    .controller('FormComponentCtrl',
    ['$scope', function ($scope) {

        $scope.init = function () {
            $scope.overview.array = [
                {name: 'Form Elements', class: 'fa fa-file-text-o'},
                {name: 'Forms', class: 'icon_document_alt'}
            ];
        };

        $scope.init();

    }
    ]
);
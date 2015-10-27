'use strict';

angular.module('app.dashboard.form.validation', [])

    .controller('FormValidationCtrl',
    ['$scope', function ($scope) {

        $scope.init = function () {
            $scope.overview.array = [
                {name: 'Form Validation', class: 'fa fa-file-text-o'},
                {name: 'Forms', class: 'icon_document_alt'}]
        };

        $scope.init();
    }]);
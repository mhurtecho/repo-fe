var productService = angular.module('productService', ['ngResource']);

productService.factory('Product', ['$resource',
    function($resource){
        //return $resource('https://young-island-2128.herokuapp.com/rest/product/list', {}, {
        //return $resource('http://localhost\\:8080/app-zero/rest/product/list', {}, {
        return $resource('view/principal/table/products.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);
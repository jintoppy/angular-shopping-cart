var catalog = angular.module('angular-shopping-cart.catalog', []);
catalog.config(['$stateProvider', function($stateProvider){

    $stateProvider.state({
        name: 'productList',
        url: '/products',
        component: 'productList'
    });

    $stateProvider.state({
        name: 'productDetail',
        url: '/product/{productId}',
        component: 'productDetail'
    });

}]);
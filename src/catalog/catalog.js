var catalog = angular.module('angular-shopping-cart.catalog', []);
catalog.config(['$stateProvider', function($stateProvider){

    $stateProvider.state({
        name: 'productList',
        url: '/products',
        component: 'productList'
    });

    $stateProvider.state({
        name: 'addProduct',
        url: '/add-product',
        component: 'addProduct'
    });

    $stateProvider.state({
        name: 'productDetail',
        url: '/product/{productId}',
        component: 'productDetail',
        resolve: {
            product: ['CatalogService', '$transition$', 
            function(CatalogService, $transition$){
                const params = $transition$.params();
                return CatalogService.getProductById(params.productId)
                            .then(function(response){
                                return response.data;
                            });
            }]
        }
    });

}]);
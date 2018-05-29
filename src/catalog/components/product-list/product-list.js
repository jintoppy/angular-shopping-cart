angular.module('angular-shopping-cart.catalog')
    .component('productList', {
        templateUrl: 'src/catalog/components/product-list/product-list.tpl.html',
        controller: ['CatalogService', function(CatalogService){
            var self = this;
            var promise = CatalogService.getProducts();
            promise.then(function(result){
                self.products = result.data;
            });
        }]
    });
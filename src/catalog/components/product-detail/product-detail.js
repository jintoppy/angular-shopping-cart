angular.module('angular-shopping-cart.catalog')
    .component('productDetail', {
        bindings: {
            product: '<'
        },
        templateUrl: 'src/catalog/components/product-detail/product-detail.tpl.html'
    });
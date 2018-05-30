angular.module('angular-shopping-cart.catalog')
    .component('productDetail', {
        bindings: {
            product: '<'
        },
        templateUrl: 'src/catalog/components/product-detail/product-detail.tpl.html',
        controller: ['CartService', function(CartService){
            this.addProductToCart = function(product){
                CartService.addToCart(product)
                    .then(function(){
                        alert('added to cart successfully');
                    });
            };
        }]
    });
angular.module('angular-shopping-cart.cart')
    .component('minicart', {
        templateUrl: 'src/cart/components/minicart/minicart.tpl.html',
        controller: ['CartService', '$rootScope', function(CartService, $rootScope){
            var self = this;
             function getCartItems(){
                CartService.getCart()
                .then(function(cartItems){
                    self.cartCount = cartItems.length;
                });
            }
            
            
            // $rootScope.$on('addedToCart', function(){
            //     getCartItems();
            // });

            $rootScope.$on('addedToCart', getCartItems);

            getCartItems();
        }]

    });
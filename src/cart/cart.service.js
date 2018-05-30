angular.module('angular-shopping-cart.cart')
    .service('CartService', ['$http', 'AppConstant', '$rootScope',
    function($http, AppConstant, $rootScope){

        this.getCart = function(){
            return $http.get(AppConstant.API.BASE_URL + AppConstant.API.CART)
                        .then(function(result){
                            return result.data;
                        });
        };

        this.addToCart = function(product){
            var request = {
                productId: product.id,
                quantity: 1
            };
            return $http
                    .post(AppConstant.API.BASE_URL + AppConstant.API.CART, request)
                    .then(function(){
                        $rootScope.$emit('addedToCart');
                    });
        };

    }]);
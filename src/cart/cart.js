var cartModule = angular.module('angular-shopping-cart.cart', []);
cartModule.config(['$stateProvider', function($stateProvider){

    $stateProvider.state({
        name: 'cart',
        url: '/cart',
        component: 'cart'
    });

}]);
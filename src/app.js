var myapp = angular.module('angular-shopping-cart', [
    'ui.router',
    'angular-shopping-cart.cart',
    'angular-shopping-cart.catalog'
]);

myapp.config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('products');
}]);
var catalog = angular.module('angular-shopping-cart.catalog');
catalog.service('CatalogService', ['$http', function($http){
    this.getProducts = function(){
        return $http.get('http://5b0cfb6e8126c900149974fe.mockapi.io/products');
    };
}]);
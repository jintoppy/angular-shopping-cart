var catalog = angular.module('angular-shopping-cart.catalog');
catalog.service('CatalogService', ['$http', 'AppConstant', 
function($http, AppConstant){
    this.getProducts = function(){
        return $http.get(AppConstant.API.BASE_URL + AppConstant.API.PRODUCTS);
    };
    this.getProductById = function(id){
        return $http.get(AppConstant.API.BASE_URL + AppConstant.API.PRODUCTS + '/' + id);
    }
}]);
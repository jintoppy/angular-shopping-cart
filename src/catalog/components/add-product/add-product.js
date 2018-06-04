angular.module('angular-shopping-cart.catalog')
    .component('addProduct', {
        templateUrl: 'src/catalog/components/add-product/add-product.tpl.html',
        controller: ['CatalogService', function(CatalogService){
            this.newProduct = {};

            this.onSubmit = function(myForm){
                if(myForm.$invalid){
                    alert('not valid');
                }
                var promise = CatalogService.addProduct(this.newProduct);
                promise.then(function(){
                    alert('Added successfully');
                });
            };
        }]
    });
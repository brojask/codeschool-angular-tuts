(function() {
var app = angular.module('store-products', []);
        app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-title.html'
            }
        })
        app.directive('productDescription', function(){
            return {
                restrict: 'A',
                templateUrl: 'templates/product-description.html'
            }
        });
        app.directive('productSpecs', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-specs.html'
            }
        });
        app.directive('productReviews',function(){
            return {
                restrict: 'A',
                templateUrl: 'templates/product-reviews.html'
            }
        });
        app.directive('productPanels', function(){
        return {
                restrict: 'E',
                templateUrl: 'templates/product-panel.html',
                controller: function(){
                    this.tab = 1;
                    this.selectTab = function(setTab) {
                    this.tab = setTab;
                    };
                    this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                    }
                },
                controllerAs: 'panel'
            }
        })

})();
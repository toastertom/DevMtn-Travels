angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $state, mainSrv) {

  if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
    }

})

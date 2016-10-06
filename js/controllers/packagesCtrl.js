angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv) {



$scope.travelData = mainSrv.travelInfo;

})

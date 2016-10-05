angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv) {

      $scope.test = "test";

      $scope.travelData = mainSrv.travelInfo;


});

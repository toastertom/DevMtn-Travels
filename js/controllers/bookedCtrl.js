angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $stateParams, mainSrv) {

  $scope.location = mainSrv.getLocation($stateParams.id);

  // getLocation();
  // function getLocation() {
  //   let id = $stateParams.id;
  //   $scope.location = mainSrv.getLocation(id);
  // }
});


// you will need to write a function that checks the url params and then loops over the data object in the service and then returns
// the object the matches the id being passed in the url params. Do this in your controller -->

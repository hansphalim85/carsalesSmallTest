var app = angular.module("carList", []); 
app.controller("carCtrl", function($scope, $http) {
    
    $http.get("data.json").then(function(response) {
        $scope.result = response.data.results;
        $scope.savedCars = response.data.savedCars;
    });
    
    $scope.saveCar = function(key) {
	    $scope.savedCars.push($scope.result[key]);
    }
    
    $scope.removeCar = function(key) {
	    $scope.savedCars.splice(key, 1);
    }
	
	
});

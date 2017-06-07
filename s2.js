var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	// 1
	$scope.cars_1 = [
		{model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
	];

	// 2
	$scope.cars_2 = {
		car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
	}

	// 3
	$scope.cars_3 = {
		car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
	}
});
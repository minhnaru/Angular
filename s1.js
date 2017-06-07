// 1
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.firstname = "Minh";
	$scope.lastname = "Naru";
});

// 4
app.controller('myCtrl4', function($scope) {
	$scope.name_4 = "Click here";
	$scope.changeName = function() {
		$scope.name_4 = "Hello Minh	";
	}
});

// 5
app.controller('myCtrl5', function($scope) {
	$scope.firstname5 = "John";
	$scope.lastname5 = "Doe";
	$scope.fullName = function() {
		return $scope.firstname5 + " " + $scope.lastname5;
	};
})

// 6
app.controller('myCtrl6', function($scope) {
	$scope.name6 = [
		{name:'Jani', country:'Norway'},
		{name:'Hege', country:'Sweden'},
		{name:'Kaik', country:'Denmark'}
	];
})

// 7
app.controller('myCtrl7', function($scope) {
	$scope.name7 = [
		'Jani',
		'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
	];
});
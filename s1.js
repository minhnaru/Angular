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

// 8
app.controller('myCtrl8', function($scope) {
	$scope.name8 = [
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

// 9
app.controller('myCtrl9', function($scope) {
	$scope.name9 = [
		{name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
	];
	$scope.orderByMe = function(x) {
		$scope.myOrderBy = x;
	}
});

// 10
app.controller('myCtrl10', function($scope, $location) {
	$scope.myUrl = $location.absUrl();
});
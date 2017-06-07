// 1
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $location, $http, $interval) {
	$scope.firstname = "Minh";
	$scope.lastname = "Naru";

	// 4
	$scope.name_4 = "Click here";
	$scope.changeName = function() {
		$scope.name_4 = "Hello Minh	";
	}

	// 5
	$scope.firstname5 = "John";
	$scope.lastname5 = "Doe";
	$scope.fullName = function() {
		return $scope.firstname5 + " " + $scope.lastname5;
	};

	// 6
	$scope.name_6 = [
		{name:'Jani', country:'Norway'},
		{name:'Hege', country:'Sweden'},
		{name:'Kaik', country:'Denmark'}
	];

	// 7
	$scope.name_7 = [
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

	// 8
	$scope.name_8 = [
		'Janip',
        'Carlo',
        'Margareth',
        'Hegess',
        'Joely',
        'Gustaver',
        'Birgity',
        'Maryland',
        'Kaito'
	];

	// 9
	$scope.name_9 = [
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

	// 10
	$scope.myUrl = $location.absUrl();

	// 11, 12
	$http.get("https://raw.githubusercontent.com/minhnaru/Angular/master/s1.json")
	.then(function(response) {
		$scope.myData = response.data.records;
	}, function(response) {
		$scope.myData = "Something went wrong";
	});

	// 13
	$scope.theTime = new Date().toLocaleTimeString();
	$interval(function() {
		$scope.theTime = new Date().toLocaleTimeString();
	}, 1000);
});
var app = angular.module('saintsApp', ["ngRoute"]);
	app.config(function ($routeProvider) {
    $routeProvider
    .when('/',
    {
        templateUrl: 'main.html',
        controller: 'homeCtrl'
    })
    .when('/previous',
    {
        templateUrl: 'previous.html',
        controller: 'prevCtrl'
    })
    .when('/next',
    {
        templateUrl: 'next.html',
        controller: 'nextCtrl'
    })
    .when('/tv',
    {
        templateUrl: 'tv.html',
    })
    .when('/bars',
    {
        templateUrl: 'bars.html',
        controller: "barsCtrl"
    })    
});

app.controller('homeCtrl', function($scope) {
    $scope.opp = "L.A. Rams";
  $scope.date = "11/4/2018";
  $scope.time = "3:25PM CST";
});

app.controller('prevCtrl', function($scope, $http) {
    $http.get("http://167.99.145.40/saintsapp/previousgames.json").then(function(response) {
        $scope.prevData = response.data.previousgames;
    });
});

app.controller('nextCtrl', function($scope, $http) {
    $http.get("http://167.99.145.40/saintsapp/nextgames.json").then(function(response) {
        $scope.nextData = response.data.nextgames;
    });
});

app.controller('barsCtrl', function($scope, $http) {
    $http.get("http://167.99.145.40/saintsapp/bars.json").then(function(response) {
        $scope.barsData = response.data.bars;
    });
});
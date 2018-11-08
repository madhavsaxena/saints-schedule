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
var app = angular.module('meanTest', []);
app.controller('testCtrl', function($scope){
	$scope.auditors = ['One', 'Two', 'Three'];
});
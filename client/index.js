var app = angular.module('meanTest', []);
app.controller('testCtrl', function($scope){
	$scope.auditor = ['One', 'Two', 'Three'];
});
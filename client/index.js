var app = angular.module('meanTest', []);
app.controller('testCtrl', function($scope){
	$scope.auditors = [
		{
			name: "Iron Man",
			audits: [{month: "june", amount: 3}]
		},
		{
			name: "Thor",
			audits: [{month: "june", amount: 2}]
		},
		{
			name: "Spider Men",
			audits: [{month: "june", amount: 1}]
		}
	];
	
		
	$scope.month = ['june', 'july', 'august', 'september'];
});
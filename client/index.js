"use strict";
var app = angular.module('meanTest', []);
app.controller('testCtrl', function($scope, $http){
	
	$http.get('/auditors').then((response)=>{
		$scope.auditors = response.data;
		
		console.log(response.status);
	});
	
	/*$scope.auditors = [
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
	];*/
	
		
	
});
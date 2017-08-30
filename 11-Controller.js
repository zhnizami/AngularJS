//var apple= angular.module('AngularServices',[]);  change the name of the controller to 'ServicesController'...
var apple= angular.module('AngularSearch',[]);

apple.controller('SearchController',function($scope,$http){
	$http.get('http://127.0.0.1/AngularJS/11-Data.json')
	.success(function(response){
		$scope.people=response.records;
	})
});



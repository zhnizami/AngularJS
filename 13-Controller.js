var apple= angular.module('AngularWatch',[]);

apple.controller('WatchController', function($scope){
	$scope.counter=0;
	$scope.$watch('textbox',function(newValue,oldValue){
		$scope.counter++;
		console.log("New Value: " + newValue);
		console.log("Old Value: " + oldValue);
	});

});
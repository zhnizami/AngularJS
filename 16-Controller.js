var apple= angular.module('AngularFactory',[]);

apple.factory('ngFactory',function(){
	var randomObject = {}; // we use an object to use factories in angularJS
	var num= Math.floor(Math.random()*10);
	randomObject.generate = function(){
		return num;
	};
	return randomObject; // angular would not work without returning the factory object.

});

apple.controller('FactoryController',function($scope,ngFactory){
		$scope.generateNo=function(){
			console.log('Button is clicked!');
			$scope.RandomNo1= ngFactory.generate();
			alert('AngularJS Factory!');

		};
});

//Similar to AngularJS Sevices, AngularJS Factories are also Singleton.
// That is only one instance can be created of a factory at a time.
// Reload the page and instance is gone allowing us to generate another instance and another random no.

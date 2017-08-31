 var apple= angular.module('AngularSer',[]);
apple.service('ngService',function(){
	var num = Math.floor(Math.random()*10);
	 this.generate=function()
	 {
	 	return num;
	 };

});

apple.controller('SerController',function($scope,ngService){

	//Both methods are correct and working fine....

	$scope.generateNo=function(){
		console.log('Button1 is clicked!');
		$scope.RandomNo1=ngService.generate();
	};

		// document.querySelector('input').addEventListener('click',function(){
		// 	console.log('Button2 is clicked!');
		// 	$scope.RandomNo2=ngService.generate();
		// 	$scope.$digest();
			
		// },false);

});

// AngularJS Services are Singleton i-e only one instance can be created at a time. 
// Therefore only one no. can be generated at a time.
// Refresh the program and we can generate a new random no.
var apple= angular.module('AngularDigest',[]);
apple.controller('DigestController', function($scope){
	$scope.RandomNo=Math.random();
	document.querySelector('input').addEventListener('click',function(){
// this code is for the button click event.....
		console.log('Button is clicked!');
		$scope.RandomNo=Math.random();
		$scope.$digest();

	},false)
});	
/*
  THIS CODE SNIPPET IS FOR THE TUTORIAL 9- ANGULAR ROUTES.HTML. UNCOMMENT THIS SNIPPET WHILE EXECUTING THAT SCRIPT.

var apple= angular.module('AngularRoute',['ngRoute']);
apple.config(function($routeProvider){
	$routeProvider
	.when('/',{
		//template: 'Welcome to the first page!'
		//templateUrl : 'page1.html'
	})
	.when('/secondPage',{
		//template: 'Welcome to the second page!'
		//templateUrl: 'hello.html'
	})
	.otherwise({
		redirectTo:'/'

	});

});*/

var apple= angular.module('AngularLogin',['ngRoute']);
apple.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		resolve:{
			"check": function($rootScope){
				$rootScope.loggedIn=false;

			}
		},
		templateUrl:'10- LoginPage.html'
	})
	.when('/dashboard',{
		resolve: {
			"check": function($location,$rootScope){
				if (!$rootScope.loggedIn) {
					$location.path('/');
				}

			}
		};
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});

});

apple.controller('LoginController',function($scope,$location,$rootScope){
	$scope.submit= function()
	{
		//var uname= $scope.username;
		//var pws= $scope.password;
		//$rootScope.uname= $scope.username;
		//$rootScope.pwd= $scope.password;
		if ($scope.username=='zohaib' && $scope.password=='forest') {
			$rootScope.loggedIn=true;			
			$location.path('/dashboard');
		}
		else
		{
			alert('Invalid username or password!');

		}
	};
});





var apple= angular.module('AngularSFP',[]);

apple.service('ngService',function(){
	var num = Math.floor(Math.random()*40);
	this.generate=function(){
		return num;
	};
});

apple.factory('ngFactory',function(){
	var facObj = {};
	var num1 = Math.floor(Math.random()*40);
	facObj.generate= function(){
		return num1;
	};
	return facObj;
});

apple.provider('ngPro',function(){
	var greet;	 
	return {
		Hi: function(value)
		{
			greet=value;
		},
		$get: function()
		{
			return {
				randomNumber : function(){
					var num2= Math.floor(Math.random()*40);
					return num2;
				},
				Hello : function(){
					return greet;
				}
			}
		}
	}
});

apple.config(function(ngProProvider){
	var setgreetings= ngProProvider.$get().randomNumber();
	console.log(" :"+ setgreetings);
	if (setgreetings >10 && setgreetings <=20) 
	{
		ngProProvider.Hi("Forest! Your age is :" +setgreetings);
	}
	else if (setgreetings >20 && setgreetings<=30) 
	{
		ngProProvider.Hi("Zohaib! Your age is :" +setgreetings);
	}
	else if (setgreetings<=10) 
	{
		ngProProvider.Hi("Osama! Your age is :" +setgreetings);
	}
	else
	{
		ngProProvider.Hi("Nizami! Your age is :" +setgreetings);
	}

});

apple.controller('SFPController',function($scope,ngService,ngFactory,ngPro){
	$scope.generateService =function(){
		var n1= ngService.generate();
		$scope.random1= n1;

	},
	$scope.generateFactory= function(){
		var n2=ngFactory.generate();
		$scope.random2=n2;
	},
	$scope.generateProvider  = function(){
		var n3=	ngPro.randomNumber();
		$scope.random3=n3;
	},
	$scope.sayhello=function(){
		var nam = ngPro.Hello();
		$scope.fname= nam;
	}

});
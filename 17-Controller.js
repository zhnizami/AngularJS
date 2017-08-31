var apple= angular.module('AngularProvider',[]);
apple.provider('ngPro', function(){
	var name;
	return { // returns the value to the provider.
		
		hello : function(value)
		{
			 name = value;

		},
		$get: function(){
			return { // returns the value to the injector.
				randomNumbers : function()
				{
					var num= Math.floor(Math.random()*20);
					return num; // returns this random no. to the function.
				},
				Hi : function()
				{
					
					return name;
				}
					}
						}
			}
});
apple.config(function(ngProProvider){
	console.log(ngProProvider);
	var age = ngProProvider.$get().randomNumbers();
	alert(age);
	if (age>10 && age<=20) {
		ngProProvider.hello("Forest");
	}
	else if (age <10 && age>=1)
	 {
		ngProProvider.hello("Niklaus");
	}
	else if (age>20 && age<=30) 
	{
		ngProProvider.hello("Zohaib");
	}
	else if (age <= 0)
	{
		ngProProvider.hello("Nizami");
	}

});
apple.controller('ProviderController',function($scope,ngPro){
			$scope.generateNo= function(){
				console.log('Button is clicked!');
				$scope.random1 = ngPro.randomNumbers();
			},
			$scope.sayhello=function(){
				$scope.fname=ngPro.Hi();
				console.log($scope.fname);
			}
});

// Unlike Factory and Service, Angular Providers are not Singleton.
// They can instantiate multiple instances at a time. 
// Allowing you to use a function multiple times.
// Whatever function you want to access by the controller, you have to initialize or 
// declare that funtion inside the injector. If your function is outside the injector, you 
// have to use the .config command to access it. 
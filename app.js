	// create the module and name it palindromeApp
	var app = angular.module('palindromeApp', ['ngRoute','ngAnimate', 'toaster']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'mainController'
			})

			
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This App will help you to find largest palindrome number from the range you would like to input.' ;
		$scope.msg = 'Created By: Aayushi Patel'; });
		
	});
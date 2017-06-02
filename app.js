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
			// route for the about page
			.when('/about', {
				templateUrl : 'templates/about.html',
				controller  : 'aboutController'
			})
			
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This App will help you to find largest palindrome number from the range you would like to input.' ;
		$scope.msg = ''; });
	app.controller('aboutController', function($scope, toaster) {
		$scope.message = 'Look! I am an Palindrome-Finder page.';
		$scope.msg = '';
        $scope.result = "";
        $scope.input1 = "";
        $scope.input2 = "";
        $scope.search = function(){
            console.log("input:"+$scope.input1)
            if($scope.input1 == "" || $scope.input2 == ""){
                toaster.error("Input can't be blank.");
            }
            else if(isNaN($scope.input1) || isNaN($scope.input2)){
                // alert("Please enter the number only");
                toaster.error("Only Numbers allowed.");
            }
            else{
                console.log("Good.");
                var input1 = parseInt($scope.input1);
                var input2 = parseInt($scope.input2);
                var hasPalindrome = false;
                if(input1 >= input2){
                    toaster.error("Must be a valid range." );
                    // alert("Please give some range. First input must be less than the second input.");
                }
                else if($scope.input2.length == 1){
                    console.log("Highest palindrome no.:"+$scope.input2);
                    $scope.result = $scope.input2;
                }
                else{
                     for(let i=input2;i>=input1;i--){
                         if($scope.isNumberPalindrome(i)){
                             console.log("Palindrome number is:"+i);
                             hasPalindrome = true;
                             $scope.result = i;
                             break;
                         }
                    }
                    if(!hasPalindrome){
                        console.log("No palindrome Number in this range.");
                        $scope.result = "None";
                    }
                }
            }
        }
        $scope.isNumberPalindrome = function(num){
            return num == num.toString().split("").reverse().join("");
        }
		
	});

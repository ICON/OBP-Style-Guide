// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var app = angular.module('styleGuideApp', ['ngAnimate', 'ngRoute']);


app.config( function ($routeProvider) {

		//================================================
		// Define all the routes
		//================================================

		$routeProvider
			.when('/404',
			{
				title: 'Oh Oh!',
				templateUrl: 'partials/not-found/404-tmpl.html',
				controller: '404Ctrl'
			})
			.when('/',
			{
				title: 'Home',
				templateUrl: 'partials/layout-tmpl.html'
			})
			.when('/layout',
			{
				title: 'Layout',
				templateUrl: 'partials/layout-tmpl.html'
			})
			.when('/default-colors',
			{
				title: 'Default Colors',
				templateUrl: 'partials/default-colors-tmpl.html'
			});



});

app.controller('navCtrl', function($scope, $location) {

	$scope.navSection = function(slug) {
		$location.path('/' + slug);
	};

});



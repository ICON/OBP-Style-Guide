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
		templateUrl: 'partials/layout-tmpl.html',
		controller: routeCtrl
	})
	.when('/:slug',
	{
		templateUrl: 'partials/url-router.html',
		controller: routeCtrl
	});
});

app.controller('navCtrl', function($scope, $location) {

	$scope.navSection = function(slug, hash) {
		$location.path('/' + slug);
		if(hash) {
			$location.hash(hash);
		}
	};
});

var routeCtrl = function($scope, $routeParams) {
	console.log('ROUTE PARAMS: ', $routeParams.slug);
    $scope.templateUrl = 'partials/'+$routeParams.slug+'-tmpl.html';

  $scope.$on('$viewContentLoaded', function() {
  	$(document).foundation();
  });
};



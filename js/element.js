'use strict';

app.controller('elementCtrl', function($scope, $rootScope) {

	$rootScope.modalElement = null;

	$scope.expandModal = function ( element ) {
		$rootScope.modalElement = element;
		console.log('ROOT MODAL ELEMENT: ', element);
	};

	$scope.thisModalElement = {
		asset: "http://placekitten.com/800/600",
		assets: [],
		assetsUrl: [],
		elements: [],
		identifier: "ch-1-pg-1-modal-image-1",
		position: 0,
		type: "modal_image"
	}
});
'use strict';

app.controller('elementCtrl', function($scope, $rootScope) {

	$rootScope.modalElement = null;

	$scope.expandModal = function ( element ) {
		$rootScope.modalElement = element;
		console.log('ROOT MODAL ELEMENT: ', element);
	};

	$scope.mockPhotoModalElement = {
		asset: "http://placekitten.com/800/600",
		assets: [],
		assetsUrl: [],
		elements: [],
		identifier: "ch-1-pg-1-modal-image-1",
		position: 0,
		type: "modal_image"
	}

	$scope.mockVideoModalElement = {
		asset: "https://d7cqn9pfudpvk.cloudfront.net/projects/58/asset_modal_videos/2898/modal_video_gameplay.mp4",
		assets: [
			{
				type: "mp4",
				url: "https://d7cqn9pfudpvk.cloudfront.net/projects/58/asset_modal_videos/2898/modal_video_gameplay.mp4",
			},
			{
				type: "webm",
				url: "https://d7cqn9pfudpvk.cloudfront.net/projects/58/asset_modal_videos/2898/modal_video_gameplay.webmp"
			}
		],
		elements: [],
		identifier: "ch-1-pg-1-modal-video-1",
		position: 0,
		poster: "https://d7cqn9pfudpvk.cloudfront.net/projects/58/asset_images/2897/tablet_image_modal_video_gameplay.png",
		type: "modal_video"
	}

	$scope.mockPhotoModalElement = {
		asset: "http://placekitten.com/810/600",
		assets: [],
		assetsUrl: [],
		elements: [
			{
				elements: [],
				identifier: '',
				position: 0,
				type: "modal_alpha_layer"
			},
			{
				
			}
		],
		identifier: "ch-1-pg-1-modal-image-1",
		position: 0,
		type: "modal_image"
	}

});
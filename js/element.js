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
    identifier: "",
    position: 0,
    type: "modal_image"
  }

  $scope.mockVideoModalElement = {
    asset: "",
    assets: [
      {
        type: "mp4",
        url: "video/poey.mp4",
      },
      {
        type: "webm",
        url: "video/poey.webm"
      }
    ],
    elements: [],
    identifier: "",
    position: 0,
    poster: "",
    type: "modal_video"
  }

  $scope.mockCarouselModalElement = {
    asset: "http://placekitten.com/810/600",
    assets: [],
    assetsUrl: [],
    elements: [
      {
        asset: "http://placekitten.com/801/600",
        assets: [],
        elements: [],
        identifier: "",
        position: 0,
        type: "modal_alpha_layer"

      },
      {
        asset: "http://placekitten.com/802/600",
        assets: [],
        elements: [],
        identifier: "",
        position: 1,
        type: "modal_alpha_layer"

      },
      {
        asset: "http://placekitten.com/803/600",
        assets: [],
        elements: [],
        identifier: "",
        position: 2,
        type: "modal_alpha_layer"

      }
    ],
    identifier: "",
    position: 0,
    type: "modal_alpha_base"
  };

  $scope.mockModalContent = {
    elements: [
      {
        content: "Body Head Content",
        identifier: 'ch-1-pg-1-body-head-1',
        type: "body_head"
      },
      {
        content: "This is the body content.",
        identifier: "ch-1-pg-1-body-normal-1",
        type: "body_normal"
      },
      {
        content: "",
        asset: "http://placekitten.com/800/600",
        elements: [],
        identifier: "ch-1-pg-1-image",
        position: 0,
        type: "image"
      }
    ],
    identifier: "",
    position: 0,
    type: "modal_content"
  };

});
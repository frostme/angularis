var app = angular.module('angularis');

function OverlayDirective(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/overlay.html',
    scope: {
      showOverlay: '=',
      overlayStyle: '=?'
    },
    link: function($scope, element, attrs, ctrl){
    },
    bindToController: true,
    controllerAs: 'overlayCtrl',
    controller: [function Controller(){
      var self = this;
    }]
  };
}

OverlayDirective.$inject = [
];

app.directive('overlay', OverlayDirective);

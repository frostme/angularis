var app = angular.module('angularis');

function OverlayedDirective(){
  return {
    restrict: 'A',
    scope: {
      'overlayed': '='
    },
    link: function($scope, element, attrs, ctrl){
      $(element).addClass('overlayed');
      $scope.$watch('overlayed', function(newValue){
        if(newValue){
          $(element).addClass('out');
        } else {
          $(element).removeClass('out');
        }
      });
    },
  };
}

OverlayedDirective.$inject = [
];

app.directive('overlayed', OverlayedDirective);

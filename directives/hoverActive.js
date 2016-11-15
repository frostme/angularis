var app = angular.module('angularis');

function HoverActiveDirective(){
  return {
    restrict: 'A',
    scope: {
      hoverActive: '=?',
      activeClass: '=?'
    },
    link: function($scope, element, attrs){
      $scope.hoverAcitve = $scope.hoverActive || false;
      $scope.activeClass = $scope.activeClass || 'active';

      $(element).hover(function(){
        $(element).addClass($scope.activeClass);
      }, function(){
        $(element).removeClass($scope.activeClass);
      });

      $scope.$watch('hoverActive', function(){
        if($scope.hoverActive){
          $(element).addClass($scope.activeClass);
        } else {
          $(element).removeClass($scope.activeClass);
        }
      });
    }
  };
}

HoverActiveDirective.$inject = [
];

app.directive('hoverActive', HoverActiveDirective);

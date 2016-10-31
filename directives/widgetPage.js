var app = angular.module('angularis');

function WidgetPageDirective(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/widgetPage.html',
    require: '^widget',
    scope: {
    },
    link: function($scope, element, attrs, widgetCtrl){
      $scope.pageNumber = widgetCtrl.pages.length;
      widgetCtrl.addPage($scope);


      $scope.$watch(function(){
        return widgetCtrl.activePage
      }, function(newValue, oldValue){
        $scope.activePage = newValue;
      });
    }
  };
}

WidgetPageDirective.$inject = [
];

app.directive('widgetPage', WidgetPageDirective);

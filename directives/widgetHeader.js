var app = angular.module('angularis');

function WidgetHeaderDirective(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/widgetHeader.html',
    require: '^widget',
    scope: {
    },
    link: function($scope, element, attrs, widgetCtrl){
    }
  };
}

WidgetHeaderDirective.$inject = [
];

app.directive('widgetHeader', WidgetHeaderDirective);

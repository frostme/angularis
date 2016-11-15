var app = angular.module('angularis');

function WidgetFooterDirective(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/widgetFooter.html',
    require: '^widget',
    scope: {
    },
    link: function($scope, element, attrs, widgetCtrl){
    }
  };
}

WidgetFooterDirective.$inject = [
];

app.directive('widgetFooter', WidgetFooterDirective);

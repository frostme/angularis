(function(){
  'use strict';
  var app = angular.module('angularis');
  
  var injects = [];
  
  function Directive(){
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

  Directive.$inject = injects;

  app.directive('widgetPage', Directive);
});

(function(){
  'use strict';

  var app = angular.module('angularis');

  var injects = [];

  function Directive(){
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/widget.html',
      scope: {
        activePage: '='
      },
      link: function($scope, element, attrs, ctrl){
        $(window).on('resize', function () {
          $(element).find('.widget').first().height(parseInt($(element).find('.widget-page.active').first().height()));
        });

        $scope.$watch( function() {
          return ctrl.activePage;
        }, function(newValue){
          window.setTimeout(function(){
            $(element).find('.widget').first().height(parseInt($(element).find('.widget-page.active').first().height()));
          }, 10);
        });
      },
      controller: ['$scope', function Controller($scope){
        self = this;
        self.activePage = self.activePage || 0;
        self.pages = [];

        function addPage(page){
          self.pages.push(page);
        }

        self.addPage    = addPage;
      }],
      controllerAs: 'widgetCtrl',
      bindToController: true
    };
  }

  Directive.$inject = injects;

  app.directive('widget', Directive);
  
}());

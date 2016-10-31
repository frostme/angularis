(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
(function(){
  var app = angular.module('angularis', []);
  require('./templates.js');
  require('./directives/widget');
  require('./directives/widgetPage');
}());

},{"./directives/widget":1,"./directives/widgetPage":2,"./templates.js":4}],4:[function(require,module,exports){
angular.module('angularis').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/widget.html',
    "<div class='widget' role='tabpanel'>\n" +
    "  <ng-transclude></ng-transclude>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/widgetPage.html',
    "<div role='tabpanel' class='widget-page'  ng-hide='activePage !== pageNumber' ng-class='{ active: (activePage === pageNumber), left: (activePage < pageNumber), right: (activePage > pageNumber) }'>\n" +
    "  <div ng-transclude>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);

},{}]},{},[3]);

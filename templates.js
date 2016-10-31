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

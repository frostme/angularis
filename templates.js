angular.module('angularis').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/overlay.html',
    "<div class='overlay' ng-class='{ \"in\": (overlayCtrl.showOverlay), \"vertical\": (!overlayCtrl.overlayStyle || (overlayCtrl.overlayStyle === \"vertical\")), \"horizontal\": (overlayCtrl.overlayStyle === \"horizontal\") }' role='dialog'>\n" +
    "  <div class='overlay-content'>\n" +
    "    <div ng-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('templates/widget.html',
    "<div class='widget' role='tabpanel'>\n" +
    "  <ng-transclude></ng-transclude>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/widgetFooter.html',
    "<div role='tabpanel' class='widget-footer'>\n" +
    "  <div ng-transclude>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/widgetHeader.html',
    "<div role='tabpanel' class='widget-header'>\n" +
    "  <div ng-transclude>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/widgetPage.html',
    "<div role='tabpanel' class='widget-page'  ng-hide='activePage !== pageNumber' ng-class='{ active: (activePage === pageNumber), left: (activePage < pageNumber), right: (activePage > pageNumber) }'>\n" +
    "  <div ng-transclude>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);

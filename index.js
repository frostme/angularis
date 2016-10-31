(function(){
  'use strict';

  //imports
  require('angular-animate');

  //instantiate
  var app = angular.module('angularis', [
      'ngAnimate'
  ]);

  //templates
  require('./templates.js');

  //directives
  require('./directives/overlay');
  require('./directives/overlayed');
  require('./directives/widget');
  require('./directives/widgetPage');
}());

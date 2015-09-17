'use strict';
// Example Page 1
module.exports = angular.module('modules.examplePage1', [])
  .directive('examplePage1', require('./examplePage1Directive'))
  .controller('ExamplePage1Controller', require('./ExamplePage1Controller'));
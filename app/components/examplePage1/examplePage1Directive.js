'use strict';

module.exports = function examplePage1() {
  return {
    controller: 'ExamplePage1Controller', // Called from HomeController.js
    // controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'EA',
    scope: true,
    template: require('./examplePage1.html')
  };
};
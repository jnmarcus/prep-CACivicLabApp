(function() {
  'use strict';

  var template = require('./examplePage2.html');

  module.exports = function examplePage2() {
    return {
      controller: 'ExamplePage2Controller', // Called from ExamplePage2Controller.js
      // controllerAs: 'ctrl',
      bindToController: true,
      restrict: 'EA',
      scope: true,
      template: template
    };
  };
})();
(function() {
  'use strict';
  require('./examplePage2/examplePage2');

  module.exports = angular.module('modules',
      [
          require('./home').name,
          require('./pages').name, // Used for static content pages like "About", "Privacy Policy", "404", etc.
          require('./examplePage1').name,
          'examplePage2Module'
      ])
      .controller('MainCtrl', require('./MainController'));
})();
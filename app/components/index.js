(function() {
  'use strict';

  require('./home/index');
  require('./examplePage2/examplePage2');

  module.exports = angular.module('components',
      [
        //require('./home').name,
        'components.home',
        require('./pages').name, // Used for static content pages like "About", "Privacy Policy", "404", etc.
        require('./examplePage1').name,
        'examplePage2Module'
      ]);
      //.controller('MainCtrl', require('./MainController'));
})();

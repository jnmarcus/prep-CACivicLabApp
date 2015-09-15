(function() {
  'use strict';

  //var template = require('./campaignFinanceApp.html');
  //var template = require('./common/campaignFinanceApp/campaignFinanceApp.html');

  module.exports = function campaignFinanceApp() {
    return {
      //controller: 'CampaignFinanceAppController', // Called from ExamplePage2Controller.js
      // controllerAs: 'ctrl',
      //bindToController: true,
      restrict: 'E',
      //scope: true,
      //template: template
      template: '<div ui-view autoscroll="false" id="ui-view"></div>'
      //replace: true
    };
  };
})();
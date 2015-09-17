'use strict';

var angular = require('angular');
//require('../common/campaignFinanceApp/campaignFinanceApp');
var campaignFinanceAppDirective = require('./components/common/campaignFinanceApp/campaignFinanceAppDirective');

require('./components/components');

module.exports = angular.module('campaignFinanceApp',
    [
        require('./components/common/common.js').name,
        'components'
    ])
    .config(require('./appRoutes'))
    .config(require('./appConfig'))
    .constant('version', require('../package.json').version)
    .run(require('./app-init'))
    .directive('campaignFinanceApp', campaignFinanceAppDirective);
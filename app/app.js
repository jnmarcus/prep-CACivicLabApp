'use strict';

var angular = require('angular');
//require('../common/campaignFinanceApp/campaignFinanceApp');
var campaignFinanceAppDirective = require('./components/common/campaignFinanceApp/campaignFinanceAppDirective');

//module.exports = angular.module('myApp',
module.exports = angular.module('campaignFinanceApp',
    [
        require('./components/common/common.js').name,
        require('./components').name
    ])
    .config(require('./appRoutes'))
    .config(require('./appConfig'))
    .constant('version', require('../package.json').version)
    .run(require('./app-init'))
    .directive('campaignFinanceApp', campaignFinanceAppDirective);
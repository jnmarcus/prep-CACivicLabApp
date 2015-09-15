'use strict';

var angular = require('angular');
//require('../common/campaignFinanceApp/campaignFinanceApp');
var campaignFinanceAppDirective = require('./common/campaignFinanceApp/campaignFinanceAppDirective');

//module.exports = angular.module('myApp',
module.exports = angular.module('campaignFinanceApp',
    [
        require('./common/common.js').name,
        require('./modules').name
    ])
    .config(require('./appRoutes'))
    .config(require('./appConfig'))
    .constant('version', require('../package.json').version)
    .run(require('./app-init'))
    .directive('campaignFinanceApp', campaignFinanceAppDirective);
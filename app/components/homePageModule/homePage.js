'use strict';
// Home View
module.exports = angular.module('components.home', [])
    .directive('homeView', require('./homeDirective'))
    .controller('HomeCtrl', require('./HomeController'));
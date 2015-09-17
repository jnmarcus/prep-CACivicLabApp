'use strict';

//module.exports = function homeDirective() {
module.exports = function homePage() {
    return {
        controller: 'HomePageController', // Called from HomeController.js
        controllerAs: 'ctrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./home.html')
    };
};
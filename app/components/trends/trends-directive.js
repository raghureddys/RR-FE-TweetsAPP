/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: trends-directive.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').directive('trends', trends);
    trends.$inject = ['$window'];
    function trends($window) {
        return {
            restrict: "AE",
            controller: 'trendsController',
            templateUrl: 'components/trends/trends.html'
        };
    }
})();
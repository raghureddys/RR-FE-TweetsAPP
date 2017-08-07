/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: tweets-directive.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').directive('tweets', tweets);
    tweets.$inject = ['$window'];
    function tweets($window) {
        return {
            restrict: "AE",
            controller: 'tweetsController',
            templateUrl: 'components/tweets/tweets.html'
        };
    }
})();
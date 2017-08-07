/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: user-directive.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').directive('user', user);
    user.$inject = ['$window'];
    function user($window) {
        return {
            restrict: "AE",
            controller: 'userController',
            templateUrl: 'components/user/user.html'
        };
    }
})();
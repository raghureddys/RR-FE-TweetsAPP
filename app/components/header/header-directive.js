/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: header-directive.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').directive('mainheader', mainheader);
    function mainheader() {
        return {
            restrict: "AE",
            templateUrl: 'components/header/header.html'
        };
    }
})();

/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: trends-controller.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').controller('trendsController', trendsController);
    trendsController.$inject = ['$scope', '$http'];
    function trendsController($scope, $http) {
        /* Get trends data from JSON file */
        $http.get('data/trends.json').
            success(function(data, status, headers, config) {
                $scope.trends = data[0].trends;
            }).
            error(function(data, status, headers, config) {
                // log error
            });
    }
})();
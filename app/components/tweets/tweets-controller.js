/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: tweets-controller.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').controller('tweetsController', tweetsController);
    tweetsController.$inject = ['$scope', '$rootScope','$http'];
    function tweetsController($scope, $rootScope, $http) {
        var url;
            $scope.getTweets = getTweets;
            $rootScope.selectedUser = 'user1';
        getTweets('user1');
        function getTweets(usr) {
            if(usr === 'user1') {
                url = 'data/userTweets.json';
                $rootScope.selectedUser = 'user1';
            } else {
                url = 'data/user2Tweets.json';
                $rootScope.selectedUser = 'user2';
            };
            /* Get user data from JSON file */
            $http.get(url).
                success(function(data, status, headers, config) {
                    $scope.tweets = data;
                    $rootScope.tweets = $scope.tweets;
                }).
                error(function(data, status, headers, config) {
                    // log error
                });
            }
    }
})();
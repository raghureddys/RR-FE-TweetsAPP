/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: user-controller.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */


(function () {
    'use strict';
    angular.module('tweetsApp').controller('userController', userController);
    userController.$inject = ['$scope', '$http'];
    function userController($scope, $http) {
        $scope.saveTweet = saveTweet;
        /* Get user data from JSON file */
        $http.get('data/user-profile.json').
        success(function(data, status, headers, config) {
            $scope.user = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
        function saveTweet() {
            var root = this.$root;
            if (root.selectedUser === 'user1') {
                root.tweets.unshift({
                    "name": "Twitter API",
                    "screen_name": "twitterapi",
                    "time": "0s",
                    "text": this.text,
                    "img": "https://avatars.discourse.org/v2/letter/k/22d042/120.png"
                });
            } else {
                root.tweets.unshift({
                    "name": "Twitter 2",
                    "screen_name": "twitter2",
                    "time": "0s",
                    "text": this.text,
                    "img": "https://pbs.twimg.com/profile_images/716053815133356032/UIW3xmYm_400x400.jpg"
                });
            }
        }
    }
})();
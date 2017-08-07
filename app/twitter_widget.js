/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/6/17
 * @Email:  sanikommu@gmail.com
 * @Filename: twitter_widget.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/6/17
 */


function twitter_controller( $scope, $http )
{
    var twitter_api_url = "http://api.twitter.com/1.1/statuses/user_timeline.json"
        , config = {
        params: {
            screen_name: widget_data.username
            , callback: "JSON_CALLBACK"
            , include_rts: true
            , count: widget_data.count
            , clientsource: "TWITTERINC_WIDGET"
            , "1340767850386": "cachebus"
        }
    };

    $http.jsonp( twitter_api_url, config).success(
        function( data, status, headers, config )
        {
            $scope.username_html = '@' + widget_data.username;
            $scope.username_href = widget_data.username;
            $scope.tweets = data;
        }
    );
}

twitter_controller.$inject = ['$scope','$http'];
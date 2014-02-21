<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "14731159-sqGOEuZBbUPCyNiRbUxbHu4nL0R89ShX1z1cIaXR1",
    'oauth_access_token_secret' => "pbMDeiLaxcQME63iGJg7dyUPkaFq6kClhtTVdBtXlZ1yt",
    'consumer_key' => "Woxpurn3BZSAeT8pmqxXNg",
    'consumer_secret' => "0TkiA6P4hKxdqVMaLS38gEylD0UlRBpb1jdRxiVPOI"
);

// Your specific requirements
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';
$getfield = '?q=#studentdebt&result_type=mixed&count=100';

// Perform the request
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  console.log("client js loaded");

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Nico Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const $tweetContainer = $('#tweet-container');

  const renderTweets = function(tweets) {

    console.log("renderTweets function loaded");

    // loops through tweets
    for (const tweet of tweets) {
      console.log("tweet", tweet);

      // calls createTweetElement for each tweet
      const $returnVal = createTweetElement(tweet);
      console.log("$returnVal", $returnVal);

      // takes return value and appends it to the tweets container
      $tweetContainer.append($returnVal);
    }
  };

  const createTweetElement = function(tweet) {
    // creating a singular tweet element

    let $tweet = $(`
      <article class="tweets">
        <header>
          <div class="image-name-handle">
            <span class="bold">
              <img src=${tweet.user.avatars} class="tweets-img"></img>
              ${tweet.user.name}
            </span>
            <span class="bold">
              ${tweet.user.handle}
            </span>
          </div>
        </header>
        <p class="bold">
          ${tweet.content.text}
        </p>
        <hr />
        <footer>
          <h3 class="no-margin">
          ${tweet.created_at}
          </h3>
          <span>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </span>
        </footer>
      </article>
    `);

    return $tweet;
  };

  renderTweets(data);

});

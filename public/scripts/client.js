/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  console.log("client.js loaded");

  const $tweetContainer = $('#tweet-container');

  const renderTweets = function(tweets) {

    // loops through tweets
    for (const tweet of tweets) {

      // calls createTweetElement for each tweet
      const $returnVal = createTweetElement(tweet);

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
          ${escape(tweet.content.text)}
        </p>
        <hr />
        <footer>
          <h3 class="no-margin">
          ${timeago.format(tweet.created_at)}
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

  // form below

  const $tweetForm = $('#tweet-form');

  const $chevron = $('#chevron');
  const $newTweet = $('.new-tweet');

  $chevron.click(() => {
    $newTweet.slideToggle();
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    })
      .then((arr) => {
        renderTweets(arr.reverse());
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  loadTweets();
  $('.error').hide();

  $tweetForm.submit(function(event) {
    event.preventDefault();

    $errorDiv = $('#error-div');

    $('.error').hide();

    let tweetLength = $(this).find('textarea').val().length;
    if (!tweetLength) {
      return $("#error-div-empty").slideDown();
    }

    if (tweetLength > 140) {
      return $("#error-div-limit").slideDown();
    }

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $("#tweet-form").serialize()
    })
      .then(() => {
        $('#tweet-container').empty();
        loadTweets();
      })
      .catch((error) => {
        console.log("error: ", error);
      });

    $(this).find('#tweet-text').val('');
    $(this).find('.counter').val(140);

    console.log("#tweet-form.serialize() value: ", $("#tweet-form").serialize());

  });

  // ensures that user-inputted texts are just text, and not executable code
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

});

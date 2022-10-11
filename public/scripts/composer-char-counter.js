$(document).ready(function() {
  console.log('composer-char-counter.js loaded into HTML!');

  let tweetTextId = $('#tweet-text');

  tweetTextId.on('input', function() {
    let charCount = $("#output-id");
    let charLimit = 140;
    const tweetLength = $(this).val().length;
    let maxLength = charLimit - tweetLength;
    charCount.text(maxLength);
  });

});

// $('li');    // FINDS an element in the DOM
// $('<li>');  // CREATES an element

// recommended variable naming to signify that it's jQuery
// const $myLi = $('<li>');

// captures the string input and its length:
// const textAreaLength = $('textarea').val.length;
// console.log("textAreaLength: ", textAreaLength);

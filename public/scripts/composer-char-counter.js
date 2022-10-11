$(document).ready(function() {
  console.log('composer-char-counter.js loaded into HTML!');

  let tweetTextId = $('#tweet-text');

  tweetTextId.on('input', function() {
    let charCount = $("#output-id");
    let charLimit = 140;
    const tweetLength = $(this).val().length;
    let maxLength = charLimit - tweetLength;
    charCount.text(maxLength);

    if (maxLength >= 0) {
      charCount.css({ 'color': '#545149' });
    }

    if (maxLength < 0) {
      charCount.css({ 'color': 'red' });
    }

  });

});

// $('li');    // FINDS an element in the DOM
// $('<li>');  // CREATES an element


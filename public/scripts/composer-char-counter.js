$(document).ready(function() {
  console.log('composer-char-counter.js loaded');

  let tweetTextId = $('#tweet-text');

  tweetTextId.on('input', function() {
    const charCount = $(this).parent().parent().find('.counter');
    const tweetLength = $(this).val().length;
    let maxLength = 140 - tweetLength;
    charCount.text(maxLength);

    if (maxLength < 0) {
      charCount.addClass('redColor');
    } 
    
    if (maxLength >= 0) {
      charCount.removeClass('redColor');
    }

  });

});

// $('li');    // FINDS an element in the DOM
// $('<li>');  // CREATES an element


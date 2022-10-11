$(document).ready(function() {
  console.log('composer-char-counter.js is loaded into the HTML!');

  const textAreaContent = $('#text-area-id');

  textAreaContent.on('keyup', () => {
    console.log('key up');
  });
});

// -----

// $('li');    // FINDS an element in the DOM
// $('<li>');  // CREATES an element

// recommended variable naming to signify that it's jQuery
// const $myLi = $('<li>');

// -----

// captures the string input and its length:

// textAreaContent.addEventListener('keydown', () => {
//   console.log("keydown!");
// });

// const textAreaLength = $('textarea').val.length;
// console.log("textAreaLength: ", textAreaLength);

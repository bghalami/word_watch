import $ from 'jquery'

$(document).ready(() => {

  // event.preventDefault();
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    .then(res => res.json())
    .then(response => {
      $('.word-count').text(`${Object.keys(response.word)}: ${Object.values(response.word)}`);
  });

})

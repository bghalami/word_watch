import $ from 'jquery'

$(document).ready(() => {
  function activateTop() {
    $('.most-word').text(``);
    fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
      .then(res => res.json())
      .then(response => {
        $('.most-word').text(`${Object.keys(response.word)}: ${Object.values(response.word)}`);
    });
  }

  const buddon    = document.querySelector(".the-buddon");
  const postThis = document.querySelector(".post-this");

  buddon.addEventListener("click", postThemWords);

  function postThemWords() {
    $('.word-count').append("<br>")
    let wordArray = postThis.value.split(" ");
    for (let word of wordArray) {
      let data   = {word: {value: word}};
      const pack = { method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify(data)
                   };
      fetch('https://wordwatch-api.herokuapp.com/api/v1/words', pack)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        $('.word-count').append(`<p>${response.message}</p><br>`);
      });
    };
    activateTop();
  };
  activateTop();
});

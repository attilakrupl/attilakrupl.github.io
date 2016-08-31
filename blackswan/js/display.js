const response = document.querySelector('.response');
const HSTable = document.querySelector('.highscores');

const display = (function () {

  function score(scoreInt){
    response.innerHTML = "<p>Your score is " + scoreInt + "!</p>";
  }

  function error(error){
    response.innerHTML = "<p>" + error + "</p>";
  }

  function highscores(highscores) {

  }

  return {
    score,
    error,
    highscores,
  }

}());

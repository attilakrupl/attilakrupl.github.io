const response = document.querySelector('.response');

const display = (function () {

  function score(scoreInt){
    response.innerHTML = "<p>Your score is " + scoreInt + "!</p>";
  }

  function error(error){
    response.innerHTML = "<p>" + error + "</p>";
  }

  function highscores(highscores) {
    return null;
  }

  return {
    score,
    error,
    highscores,
  }

}());

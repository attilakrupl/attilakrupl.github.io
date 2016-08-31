const response = document.querySelector('.response');

const display = (function () {

  function score(scoreInt){
    response.innerHTML = "<p>Your score is " + scoreInt + "!</p>";
  }

  function error(error){
    response.innerHTML = "<p>" + error + "</p>";
  }

  return {
    score,
    error,
  }

}());

const response = document.querySelector('.response');
const HSTable = document.querySelector('.highscores');

const display = (function () {

  function score(scoreInt){
    response.innerHTML = "<p>Your score is " + scoreInt + "!</p>";
  }

  function error(error){
    response.innerHTML = "<p>" + error + "</p>";
  }

  function showHSPanel() {
    HSTable.setAttribute('id', 'highscoresVisible');
  }

  function hideHSPanel() {
    HSTable.setAttribute('id', 'highscoresInvisible');
  }

  function showOneScore(score) {
    const newRow = document.createElement('tr');
    const newWord = document.createElement('td');
    const newScore = document.createElement('td');

    newWord.textContent = score.word;
    newScore.textContent = score.score;

    newRow.appendChild(newWord);
    newRow.appendChild(newScore);
    document.querySelector('.listOfScores tbody').appendChild(newRow);
  }

  function eraseHistory() {
    document.querySelector('.listOfScores tbody').innerHTML = '';
  }

  function showScores(highscores) {
    eraseHistory();
    for (var i = 0; i < highscores.length; i++) {
      showOneScore(highscores[i]);
    }
  }

  return {
    score,
    error,
    showHSPanel,
    hideHSPanel,
    showScores,
  }

}());

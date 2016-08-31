const highscore = (function() {
  var highScoreContainer = [];

  function highScoreObject(score, word) {
    this.word = word;
    this.score = score;
    }

  function load() {
    var LSHighScoreContainer = localStorage.getItem('highScoreContainer');
    highScoreContainer = JSON.parse(LSHighScoreContainer);
    if(!highScoreContainer){
      highScoreContainer = [];
    }
  }

  function saveItemToMemory(score, word) {
    load();
    var newHighScore = new highScoreObject(score, word);
    highScoreContainer.push(newHighScore);
  }

  function saveListToLS() {
    var listToUpload = JSON.stringify(highScoreContainer);
    localStorage.setItem('highScoreContainer', listToUpload);
  }

  return {
    saveItemToMemory,
    saveListToLS,
    load,
  }

}());

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
    return highScoreContainer;
  }

    function wordInHighScores(list, element) {
      for(var i =0; i < list.length; i++) {
        if(list[i].word === element) {
          return true;
        }
      }
      return false;
    }

  function saveItemToMemory(score, word) {
    var newHighScore = new highScoreObject(score, word);
    highScoreContainer.push(newHighScore);
  }

  function saveListToLS() {
    var listToUpload = JSON.stringify(highScoreContainer);
    display.showScores(highScoreContainer);
    localStorage.setItem('highScoreContainer', listToUpload);
  }

  return {
    saveItemToMemory,
    saveListToLS,
    load,
    wordInHighScores,
  }

}());

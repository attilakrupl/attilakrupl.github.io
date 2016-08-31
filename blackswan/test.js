var highScoreContainer = [{"word":"melon","score":5},{"word":"pineapple","score":6}];
var highest = 0;

function wordInHighScores(element) {
  for(var i =0; i < highScoreContainer.length; i++) {
    if(highScoreContainer[i].word === element) {
      return true;
    }
  }
  return false;
}


console.log(wordInHighScores("melon"));

var highScoreContainer = [{"word":"melon","score":5},{"word":"pineapple","score":6}];
var highest = 0;

function run(highScoreContainer) {
  highScoreContainer.forEach(function(scoreObject) {
    if(scoreObject.score > highest) {
      highest = scoreObject.score;
      console.log(highest);
    }
  });
}


run(highScoreContainer);

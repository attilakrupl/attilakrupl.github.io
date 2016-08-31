'use strict';
var playButton = document.querySelector('#submitButton');
var highScoreButton = document.querySelector('#highScoreButton');
var userGuess = document.querySelector('#userGuess');
var list = ['pear', 'melon', 'pineapple', 'banana', 'lemon', 'watermelon'];

const controller = (function() {

  function getInput() {
    return userGuess.value;
  }

  function clearInputField() {
    userGuess.value = '';
  }

  function elementInList(list, element) {
    return list.includes(element);
  }

  function getScore(userInput) {
    var charList = [];
    for (var i = 0; i < userInput.length; i++) {
      if(!elementInList(charList,userInput[i])){
        charList.push(userInput[i]);
      }
    }
    return charList.length;
  }

  function runGame() {
    var highScoreContainer = highscore.load();
    var input = getInput();
    clearInputField();
    var highScore = getScore(input);
    if(highscore.wordInHighScores(highScoreContainer, input)) {
      display.error("You've already tried this word!");
    } else if (!(elementInList(list, input))) {
      display.error("Word not in dictionary! Please try again!");
    } else {
      display.score(highScore);
      highscore.saveItemToMemory(highScore, input);
      highscore.saveListToLS();
    }
  }

  return {
    runGame,
  }

}());

playButton.addEventListener('click', controller.runGame);
highScoreButton.addEventListener('click', display.highscores);
userGuess.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault();
      return controller.runGame();
    }
});

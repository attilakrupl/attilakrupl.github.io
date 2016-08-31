'use strict';
var button = document.querySelector('#submitButton');
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
    load();
    var input = getInput();
    clearInputField();
    if (elementInList(list, input)) {
      var highScore = getScore(input);
      display.score(highScore);
      highscore.saveItemToMemory(highScore, input);
      highscore.saveListToLS();
    } else {
      display.error("Word not in dictionary! Please try again!");
    }
  }

  return {
    runGame,
  }

}());

button.addEventListener('click', controller.runGame);
userGuess.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault();
      return controller.runGame();
    }
});

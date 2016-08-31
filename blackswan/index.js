'use strict';
var button = document.querySelector('#submitButton');
var userGuess = document.querySelector('#userGuess');

const controller = (function() {
  var list = ['manna', 'lolka', 'pear', 'melon'];

  function getInput() {
    return userGuess.value;
  }

  function inputInList(list, userInput) {
    return list.includes(userInput);
  }

  function getScore(userInput) {
    var charList = [];
    for (var i = 0; i < userInput.length; i++) {
      if(!inputInList(charList,userInput[i])){
        charList.push(userInput[i]);
      }
    }
    return charList.length;
  }

  function runGame() {
    var input = getInput();
    if (inputInList(list, input)) {
      let guessScore
      console.log(getScore(input));
      display.score(getScore(input));
    } else {
      console.log("Wrong word you bastard! Try again!");
      return "Wrong word you bastard! Try again!";
    }
  }

  return {
    getInput,
    inputInList,
    getScore,
    runGame,
  }

}());

button.addEventListener('click', controller.runGame);

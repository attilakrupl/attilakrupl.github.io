const fields = document.querySelectorAll('.gameField');
const resetButton = document.querySelector('.reset');
var board = [];
var playerScore = 0;
var computerScore = 0;

function initializeScoresFromStorage() {
  document.querySelector('.playerScore').innerHTML = "<p>Player: " + getObjectFromLS("playerScore") + "</p>";
  document.querySelector('.computerScore').innerHTML = "<p>Computer: " + getObjectFromLS("computerScore ") + "</p>";
}

function initializeScoresFromMemory() {
  document.querySelector('.playerScore').innerHTML = "<p>Player: " + playerScore + "</p>";
  document.querySelector('.computerScore').innerHTML = "<p>Computer: " + computerScore + "</p>";
}

function setClassToField(className, i){
  fields[i].classList.add(className);
}

function setPlayersField(i) {
  document.querySelector("#n"+i).classList.add("playerSign");
  board[i].player = true;
}

function setComputersField(i) {
  document.querySelector("#n"+i).classList.add("computerSign");
  board[i].computer=true;
}

function setEventListenerToField(i) {
  fields[i].addEventListener('click', playersTurn(i));
}

function initializeFieldAttributesFromLS(i) {
  if(board[i].computer===true){
    setClassToField("computer", i);
  } else if(board[i].player===true){
    setClassToField("player", i);
  }
  setEventListenerToField(i);
}

function initializeFieldAttributesFromMemory(i) {
  board.push(new field(i));
  fields[i].setAttribute('class', 'gameField')
  setEventListenerToField(i);
}

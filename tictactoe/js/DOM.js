const fields = document.querySelectorAll('.gameField');
const resetButton = document.querySelector('.reset');
var board = [];
var playerScore = 0;
var computerScore = 0;

function initializeScoresFromStorage() {
  document.querySelector('.playerScore').innerHTML = "<p>Player: " + getObjectFromLS("playerScore") + "</p>";
  document.querySelector('.computerScore').innerHTML = "<p>Computer: " + getObjectFromLS("computerScore") + "</p>";
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
  fields[i].addEventListener('click', playersTurn);
}

function initializeFieldAttributesFromLS(i) {
  if(board[i].computer===true){
    console.log("init comp field");
    setClassToField("computerSign", i);
  } else if(board[i].player===true){
    console.log("init playa field");
    setClassToField("playerSign", i);
  }
  setEventListenerToField(i);
}

function initializeFieldAttributesFromMemory(i) {
  board.push(new field(i));
  fields[i].setAttribute('class', 'gameField')
  setEventListenerToField(i);
}

function removeEventListeners() {
  for (var i = 0; i < fields.length; i++) {
  fields[i].removeEventListener('click', playersTurn(i));
  }
}

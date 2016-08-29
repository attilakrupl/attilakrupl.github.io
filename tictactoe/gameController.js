const fields = document.querySelectorAll('.gameField');
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);
var board = [];
var playerScore = 0;
var computerScore = 0;

function startGame() {
  initializeBoard();
  initializeScores();
}

function initializeBoard() {
  if(boardInLSExists) {
    initializeBoardFromStorage();
  } else {
    initializeBoardFromMemory();
    pushBoardDataToLS();
    pushScoresDataToLS();
  }
}

function initializeBoardFromStorage() {
  board = JSON.parse(localStorage.getItem('board'));
  for (var i = 0; i < board.length; i++){
    if(board[i].computer===true){
      fields[i].classList.add("computer");
      fields[i].addEventListener('click', tickField(i));
    } else if(board[i].player===true){
      fields[i].classList.add("player");
      fields[i].addEventListener('click', tickField(i));
    } else {
      fields[i].addEventListener('click', tickField(i));
    }
  }
}


function initializeBoardFromMemory() {
  for (var i =0; i < fields.length; i++){
    board.push(new field(i));
    setScoresFromMemory();
    fields[i].addEventListener('click', tickField(i));
  }
}


function pushBoardDataToLS() {
  localStorage.setItem('board', JSON.stringify(board));
}

function pushScoresDataToLS() {
  localStorage.setItem('playerScore', JSON.stringify(playerScore));
  localStorage.setItem('computerScore', JSON.stringify(computerScore));
}


function initializeScores() {
  if(localStorage.playerScore || localStorage.computerScore) {
    setScoresFromStorage();
  } else {
    setScoresFromMemory();
    pushScoresDataToLS();
  }
}


function setScoresFromStorage() {
  playerScore = JSON.parse(localStorage.getItem('playerScore'));
  computerScore = JSON.parse(localStorage.getItem('computerScore'));
  document.querySelector('.playerScore').innerHTML = "<p>Player: " + playerScore + "</p>";
  document.querySelector('.computerScore').innerHTML = "<p>Computer: " + computerScore + "</p>";
}

function setScoresFromMemory() {
  document.querySelector('.playerScore').innerHTML = "<p>Player: " + playerScore + "</p>";
  document.querySelector('.computerScore').innerHTML = "<p>Computer: " + computerScore + "</p>";
}




startGame();


function reset() {
  localStorage.removeItem('board');
  console.log('Board erased!');
}

function field(id) {
  this.id = id;
  this.computer = false;
  this.player = false;
}

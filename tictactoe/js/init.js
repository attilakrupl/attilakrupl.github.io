function initializeBoard() {
  if(localStorage.board) {
    initializeBoardFromStorage();
  } else {
    initializeBoardFromMemory();
    pushBoardDataToLS();
  }
}

function initializeScores() {
  if(localStorage.playerScore || localStorage.computerScore) {
    setScoresFromStorage();
  } else {
    setScoresFromMemory();
    pushScoresDataToLS();
  }
}

function initializeBoardFromMemory() {
  for (var i =0; i < fields.length; i++){
    board.push(new field(i));
    setScoresFromMemory();
    fields[i].addEventListener('click', tickField(i));
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

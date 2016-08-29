
function startGame() {
  initializeBoard();
  initializeScores();
}

function pushBoardDataToLS() {
  localStorage.setItem('board', JSON.stringify(board));
}

function pushScoresDataToLS() {
  localStorage.setItem('playerScore', JSON.stringify(playerScore));
  localStorage.setItem('computerScore', JSON.stringify(computerScore));
}

function tickField(i) {
  return function() {
    document.querySelector("#n"+i).classList.add("playerSign");
    board[i].player=true;
    pushBoardDataToLS();
    if(someoneWon("player")) {
      addScore("player");
      alert("Player won!");
    } else {
      computersTurn();
    }
  }
}

function circleField(i) {
  document.querySelector("#n"+i).classList.add("computerSign");
  board[i].computer=true;
  pushBoardDataToLS();
  if (someoneWon("computer")) {
    addScore("computer");
    alert("Computer won!");
  }
}

function computersTurn() {
  if (thereAreAvailableFields()) {
    var randomField = board[Math.floor(Math.random()*9)];
    if(!(randomField.computer || randomField.player)) {
      circleField(randomField.id);
    } else {
      computersTurn();
    }
  } else {
    console.log("End of game");
  }
}

function thereAreAvailableFields() {
  var numberOfEmptyFields = 0;
  for (var i = 0; i < board.length; i++) {
    if (!(board[i].computer || board[i].player)){
      numberOfEmptyFields++;
    }
  }
  return (numberOfEmptyFields > 0 ? true : false);
}

function addScore(who) {
  if (who ==="player") {
    playerScore++;
  } if (who ==="computer") {
    computerScore++;
  }
  setScoresFromMemory();
  pushScoresDataToLS();
}

function someoneWon(who) {
  if ((board[0][who]&&board[1][who]&&board[2][who]) || (board[3][who]&&board[4][who]&&board[5][who]) || (board[6][who]&&board[7][who]&&board[8][who])) {
    return true;
  } else if ((board[0][who]&&board[3][who]&&board[6][who]) || (board[1][who]&&board[4][who]&&board[7][who]) || (board[2][who]&&board[5][who]&&board[8][who])) {
    return true;
  } else if ((board[0][who]&&board[4][who]&&board[8][who]) || (board[2][who]&&board[4][who]&&board[6][who])) {
    return true;
  } else {
    return false;
  }
}

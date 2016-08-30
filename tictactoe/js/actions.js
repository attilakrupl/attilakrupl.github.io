function playerWon() {
  console.log("player won called");
  if(someoneWon("player")) {
    addScore("player");
    resetBoard();
    startGame();
  } else {
    computersTurn();
  }
}

function computerWon() {
  if (someoneWon("computer")) {
    addScore("computer");
    resetBoard();
    startGame();
  } else {
    console.log("Players turn");
  }
}

function playersTurn() {
    console.log("i clicked once");
    var i = event.target.id[1];
    setPlayersField(i);
    setBoardInLS();
    playerWon();
}

function availableFields() {
  var idOfEmptyFields = [];
  for (var i = 0; i < board.length; i++) {
    if (!(board[i].computer || board[i].player)){
      idOfEmptyFields.push(board[i].id);
    }
  }
  return idOfEmptyFields;
}

function computersTurn() {
  console.log(availableFields());
  if (availableFields().length) {
    setComputersField(AISelectField(availableFields()));
    setBoardInLS();
  } else {
    console.log("This is a tie");
  }
}

function addScore(who) {
  console.log("add score for player");
  if (who ==="player") {
    playerScore++;
    setPlayerScoreInLS();
  } else if (who ==="computer") {
    computerScore++;
    setComputerScoreInLS()
  } else {
    console.log("This is impossible");
  }
  initializeScoresFromMemory();
}

function someoneWon(who) {
  if ((board[0][who] && board[1][who] &&board[2][who]) || (board[3][who] && board[4][who] && board[5][who]) || (board[6][who] && board[7][who] && board[8][who])) {
    return true;
  } else if ((board[0][who] && board[3][who] && board[6][who]) || (board[1][who] && board[4][who] && board[7][who]) || (board[2][who] && board[5][who] && board[8][who])) {
    return true;
  } else if ((board[0][who] && board[4][who] && board[8][who]) || (board[2][who] && board[4][who] && board[6][who])) {
    return true;
  } else {
    return false;
  }
}

function playerWon() {
  if(someoneWon("player")) {
    addScore("player");
    resetBoard()
    startGame();
  } else {
    computersTurn();
  }
}

function computerWon() {
  if (someoneWon("computer")) {
    addScore("computer");
    resetBoard()
    startGame();
  } else {
    console.log("Players turn");
  }
}

function playersTurn(i) {
  return function() {
    setPlayersField(i);
    setBoardInLS();
    playerWon();
  }
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
  var listOfFields = availableFields();
  console.log(listOfFields);
  if (listOfFields.length) {
    setComputersField(AISelectField(listOfFields));
    setBoardInLS();
  } else {
    console.log("This is a tie");
  }
}

function addScore(who) {
  if (who ==="player") {
    playerScore++;
    setPlayerScoreInLS();
  } if (who ==="computer") {
    computerScore++;
    setComputerScoreInLS()
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

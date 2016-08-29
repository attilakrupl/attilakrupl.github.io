function boardInLSExists() {
  if(localStorage.board) {
    return true;
  } else {
    return false;
  }
}

function resetBoard() {
  localStorage.removeItem('board');
  board = [];
  initializeBoardFromMemory();
}

function scoresInLSExist() {
  if(localStorage.playerScore || localStorage.computerScore) {
    return true;
  } else {
    return false;
  }
}

function getObjectFromLS(objectName) {
  return(JSON.parse(localStorage.getItem(objectName)));
}

function setBoardInLS() {
  localStorage.setItem('board', JSON.stringify(board));
}

function setPlayerScoreInLS() {
  localStorage.setItem('playerScore', JSON.stringify(playerScore));
}

function setComputerScoreInLS() {
  localStorage.setItem('computerScore', JSON.stringify(computerScore));
}

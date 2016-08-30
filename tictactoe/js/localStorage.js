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
  console.log("init object: " + objectName);
  return(JSON.parse(localStorage.getItem(objectName)));
}

function setBoardInLS() {
  localStorage.setItem('board', JSON.stringify(board));
}

function setPlayerScoreInLS() {
  console.log("setPlayerScore in LS");
  localStorage.setItem('playerScore', JSON.stringify(playerScore));
}

function setComputerScoreInLS() {
  console.log("set comp score");
  localStorage.setItem('computerScore', JSON.stringify(computerScore));
}

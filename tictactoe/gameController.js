function startGame() {
  initializeBoard();
  initializeScores();
}

function initializeBoard() {
  if(boardInLSExists()) {
    initializeBoardFromStorage();
  } else {
    initializeBoardFromMemory();
  }
}

function initializeScores() {
  if(scoresInLSExist()) {
    initializeScoresFromStorage();
  } else {
    initializeScoresFromMemory();
  }
}

function initializeBoardFromStorage() {
  board = getObjectFromLS('board');
  for (var i = 0; i < board.length; i++){
    initializeFieldAttributesFromLS(i);
  }
}

function initializeBoardFromMemory() {
  for (var i =0; i < fields.length; i++){
    initializeFieldAttributesFromMemory(i);
  }
}

startGame();

resetButton.addEventListener('click', resetBoard);

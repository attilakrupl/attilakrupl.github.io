function startGame() {
  console.log("start game");
  initializeBoard();
  initializeScores();
  setPlayerScoreInLS();
  setComputerScoreInLS();
}

function initializeBoard() {
  if(boardInLSExists()) {
    console.log("init from ls1");
    initializeBoardFromStorage();
  } else {
    initializeBoardFromMemory();
    console.log("init from mem1");
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
  console.log("init from ls2");
  board = getObjectFromLS('board');
  for (var i = 0; i < board.length; i++){
    console.log("init from ls4");
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

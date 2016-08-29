const fields = document.querySelectorAll('.gameField');
const resetButton = document.querySelector('.reset');

var board = [];
var playerScore = 0;
var computerScore = 0;

function reset() {
  localStorage.removeItem('board');
  console.log('Board erased!');
}

function field(id) {
  this.id = id;
  this.computer = false;
  this.player = false;
}

startGame();
resetButton.addEventListener('click', reset);

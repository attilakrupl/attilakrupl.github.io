function boardInLSExists() {
  if(localStorage.board) {
    return true;
  } else {
    return false;
  }
}

function resetBoard() {
  localStorage.removeItem('board');
}

console.log(boardInLSExists());

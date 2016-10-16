var main = document.querySelector('main');
var container = document.querySelector('.container');
var cycleCounter = document.querySelector('h2');
var startCycle = document.querySelector('.start');

var a = 10;
var width = 1000;
var height = 600;
var numOfRows = height / a;
var numOfColumns = width / a;
var universe;
var counter = 0;

function createUniverse() {
  var universe = [];
  for (var i = 0; i < height / a; i++) {
    universe[i] = [];
    for (var j = 0; j < width / a; j++) {
      universe[i].push(Math.floor(Math.random() * 2));
    }
  }
  return universe;
}

function populateUniverse(universe) {
  container.innerHTML="";
  for (var i = 0; i < width * height / (a*a) ; i++) {
    var div = document.createElement('div');
    div.classList.add(universe[parseInt(i/numOfColumns)][i%numOfColumns]==0 ? 'zero' : 'one');
    container.appendChild(div);
  }
}

function neighbours (universe, y, x) {
  var numberOfNeighbours = 0;
  var neighbourCoords = [[y-1, x-1], [y-1, x], [y-1, x+1], [y, x-1], [y, x+1], [y+1, x-1], [y+1, x], [y+1, x+1]];
  for (var i = 0; i < neighbourCoords.length; i++) {
    var iy = neighbourCoords[i][0];
    var ix = neighbourCoords[i][1];
    if ((iy > -1) && (iy < numOfRows ) && (ix > -1) && (ix < numOfColumns)) {
      if (universe[iy][ix] == 1) {
        numberOfNeighbours++;
      }
    }
  }
  return numberOfNeighbours;
}


function live() {
  var doLive = setInterval(function() {
    var newUniverse = [];
    for (var i = 0; i < universe.length; i++) {
      newUniverseLine = []
      for (var j = 0; j < universe[i].length; j++) {
        var numberOfNeighbours = neighbours(universe, i, j);
        if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
          newUniverseLine.push(0);
        } else if (numberOfNeighbours == 3) {
          newUniverseLine.push(1);
        } else if (numberOfNeighbours == 2) {
          if(universe[i][j] == 0) {
            newUniverseLine.push(0);
          } else if (universe[i][j] == 1) {
            newUniverseLine.push(1);
          }
        }
      }
      newUniverse.push(newUniverseLine);
    }
    universe = newUniverse;
    populateUniverse(universe);
    counter++;
    cycleCounter.textContent = "";
    cycleCounter.textContent = "Cycles: " + counter;
  }, 100);

}

function runThis() {
  universe = createUniverse();
  populateUniverse(universe);
}

runThis();

startCycle.addEventListener("click", live)

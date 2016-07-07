'use strict';
var fs = require('fs');

var addButton = document.querySelector('.add_task');

function dispCont() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var all = JSON.parse(xhr.responseText);
    all.forEach((e) => {
      console.log(e);
    });
  };
  xhr.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos');
  xhr.send();
}

function readEmptyTaskFile() {
  fs.readFile('./task.txt', (content) => {
    console.log(String(content));
  });
}

dispCont();
readEmptyTaskFile();

addButton.addEventListener('click', dispCont);

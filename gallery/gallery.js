'use strict';
let imageCounter = 0;
let thumbCounter = 0;
const fileList = ['Ceres-Bright-Spot',
                  'Saturn',
                  'Saturn-F-Ring',
                  'Epimetheus',
                  'Enceladus',
                  'Ceres-Ridges',
                  'Enceladus-Tectonic',
                  'Saturn-Rings',
                  'Saturn-Rings-2',
                  'Dione'];
const numOfImages = fileList.length;
const bigButtonLeft = document.querySelector('#button1');
const bigButtonRight = document.querySelector('#button2');
const smallButtonLeft = document.querySelector('#button3');
const smallButtonRight = document.querySelector('#button4');
const thumbList = [];
const imageList = document.querySelectorAll('.thumbnail');
let highlighted = 0;


function fileNameGenerator(num) {
  const fileName = fileList[((imageCounter) + num) % numOfImages];
  return './images/' + fileName + '.jpg';
}

function thumbNameGenerator(num) {
  const fileName = fileList[((thumbCounter) + num) % numOfImages];
  return './images/' + fileName + '.jpg';
}

function setName() {
  document.querySelector('.image_name').textContent = fileList[imageCounter % numOfImages];
}

function setImages() {
  document.querySelectorAll('.main-image')[0].setAttribute('src', fileNameGenerator(highlighted));
  for (let i = 0; i < 5; i++) {
    document.querySelectorAll('.thumbnail')[i].setAttribute('src', thumbNameGenerator(i));
    thumbList[i] = thumbNameGenerator(i);
  }
  document.querySelectorAll('.thumbnail')[highlighted].classList.add('highlighted');
}

function highLight(n){
  document.querySelectorAll('.thumbnail')[highlighted].classList.remove('highlighted');
  highlighted = n;
  document.querySelectorAll('.thumbnail')[highlighted].classList.add('highlighted');
}

function moveImages() {
  highLight(0);
  document.querySelectorAll('.main-image')[0].setAttribute('src', fileNameGenerator(0));
  thumbCounter = imageCounter;
}

function moveThumbs() {
  var thumbs = document.querySelectorAll('.thumbnail');
  for (let i = 0; i < 5; i++) {
    thumbs[i].setAttribute('src', thumbNameGenerator(i));
    thumbList[i] = thumbNameGenerator(i);
    // thumbs[i].setAttribute('data-id', i);
  }
}

function goLeft() {
  if (imageCounter > 0) {
    imageCounter--;
  } else {
    imageCounter += numOfImages - 1;
  }
  moveImages();
  moveThumbs();
  setName();
}

function goRight() {
  imageCounter++;
  moveImages();
  moveThumbs();
  setName();
}

function thumbLeft() {
  if (thumbCounter > 0) {
    thumbCounter--;
  } else {
    thumbCounter += numOfImages - 1;
  }
  moveThumbs();
}

function thumbRight() {
  thumbCounter++;
  moveThumbs();
}

function thumbOnClick(i) {
  return function() {
    highLight(i)
    document.querySelectorAll('.main-image')[0].setAttribute('src', imageList[i].src);

    const nameArr = document.querySelectorAll('.main-image')[0].src.split('/');
    const res = (nameArr[nameArr.length - 1]).split('.')[0];
    document.querySelector('.image_name').textContent = res;
  };
}

setImages();
setName();
bigButtonLeft.addEventListener('click', goLeft);
bigButtonRight.addEventListener('click', goRight);
smallButtonLeft.addEventListener('click', thumbLeft);
smallButtonRight.addEventListener('click', thumbRight);
for (let i = 0; i < 5; i++) {
  imageList[i].addEventListener('click', thumbOnClick(i));
}

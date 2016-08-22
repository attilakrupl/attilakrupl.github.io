'use strict';

const graphButton = document.querySelector('#graphButton');
const addButton = document.querySelector('#addButton');
const okButton = document.querySelector('#okButton');
const cancelButton = document.querySelector('#cancelButton');
const path = 'http://localhost:3000/names';

let contactsArray = [];

function Contact(name, job, age, nick, employee) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.nick = nick;
  this.employee = employee;
}

function displayName(name, i) {
  const newRow = document.createElement('tr');
  const nameTitle = document.createElement('td');
  const myName = document.createElement('p');
  const title = document.createElement('p');
  const age = document.createElement('td');
  const nick = document.createElement('td');
  const isEmployee = document.createElement('td');
  const deleteMe = document.createElement('td');
  const deleteLink = document.createElement('a');

  myName.textContent = name.name;
  title.textContent = name.job;
  age.textContent = name.age;
  nick.textContent = name.nick;
  name.employee === true ? isEmployee.setAttribute('class', 'employee') : isEmployee.setAttribute('class', 'boss');
  deleteLink.setAttribute('id', i);
  deleteLink.addEventListener('click', deleteName);
  deleteLink.innerHTML = 'Delete';

  nameTitle.appendChild(myName);
  nameTitle.appendChild(title);
  newRow.appendChild(nameTitle);
  newRow.appendChild(age);
  newRow.appendChild(nick);
  newRow.appendChild(isEmployee);
  deleteMe.appendChild(deleteLink);
  newRow.appendChild(deleteMe);
  document.querySelector('.listOfContacts tbody').appendChild(newRow);

  contactsArray[i] = name;
}

function myRequest(method, url, data, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
  xhr.onload = () => {
    cb(xhr.responseText);
  };
  xhr.send(data);
}

function getContent() {
  myRequest('GET', path, '', (names) => {
    for (var i = 0; i < JSON.parse(names).length; i++) {
      displayName(JSON.parse(names)[i], i);
    }
  });
}

function eraseOldContent() {
  document.querySelector('.listOfContacts tbody').innerHTML = '';
}

function updateJson() {
  myRequest('POST', path, JSON.stringify(contactsArray), () => {
    eraseOldContent();
    getContent();
  });
}

function deleteName() {
  const dump = document.querySelector('textarea');
  dump.textContent += 'Contact deleted: ' + JSON.stringify(contactsArray[event.target.id]) + '\n';
  contactsArray.splice(event.target.id, 1);
  updateJson();
}

function openAddPanel() {
  const addContactPanel = document.querySelector('.addNewContact');
  addContactPanel.setAttribute('id', 'addNewContactVisible');
}

function readInputFields() {
  let name = document.querySelector('#name').value;
  let title = document.querySelector('#title').value;
  let age = document.querySelector('#age').value;
  let nick = document.querySelector('#nick').value;
  let employee = document.querySelector('#employee').checked;
  let newContact;
  if (name == '' || title == '' || age == '' || nick == '') {
    newContact = null;
  } else {
    newContact = new Contact(name, title, age, nick, employee);
  }
  return newContact;
}

function eraseInputFields() {
  document.querySelector('#name').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#age').value = '';
  document.querySelector('#nick').value = '';
  document.querySelector('#employee').checked = false;
}

function addNewContact() {
  event.preventDefault();
  const newContact = readInputFields();
  if (newContact == null) {
    alert("All fields must be filled up!");
  } else {
    const dump = document.querySelector('textarea');
    dump.textContent += 'New contact added: ' + JSON.stringify(newContact) + '\n';
    contactsArray.push(newContact);
    hidePanels();
    eraseInputFields();
    updateJson();
  }
}

function openGraphPanel() {
  const addContactPanel = document.querySelector('.graph');
  addContactPanel.setAttribute('id', 'graphVisible');
}

function hidePanels() {
  event.preventDefault();
  document.querySelector('.addNewContact').setAttribute('id', 'addNewContactInvisible');
  document.querySelector('.graph').setAttribute('id', 'graphInvisible');
}

getContent();
addButton.addEventListener('click', openAddPanel);
okButton.addEventListener('click', addNewContact);
cancelButton.addEventListener('click', hidePanels);
graphButton.addEventListener('click', openGraphPanel);
document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    hidePanels();
  }
});

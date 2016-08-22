'use strict';

const fs = require('fs');
const fileName = 'persons.json';

const myJson = (function () {
  function publicGetNames(req, callback) {
    fs.readFile(fileName, 'utf-8', (err, row) => {
      if (err) {
        callback(err);
      }
      callback(row);
    });
  }

  function publicUpdateName(req, callback) {
    fs.writeFileSync(fileName, JSON.stringify(req.body));
    callback('Contact List Updated');
  }

  return {
    getNames: publicGetNames,
    updateName: publicUpdateName,
  };
}());
module.exports = myJson;

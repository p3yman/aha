#!/usr/bin/env node

const jsonfile = require('jsonfile');

const DATA_FILE = 'data.json';

module.exports = function() {
  console.log('Welcome to the CLI');

  let data = { rows: [] };

  try {
    data = jsonfile.readFileSync(file);
  } catch (err) {
    jsonfile.writeFileSync(DATA_FILE, data, { spaces: 2 });
  }

  console.log(data);

};
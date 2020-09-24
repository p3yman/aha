#!/usr/bin/env node
const jsonfile = require('jsonfile');
const program = require('commander');

program.version('0.1.0');

// Import commands
require('./commands/list');

// Parse Args
program.parse(process.argv);

const DATA_FILE = 'data.json';

module.exports = function() {
  console.log('Welcome to the CLI');

  let data = { rows: [] };

  // Read file and create new one if it doesn't exist.
  try {
    data = jsonfile.readFileSync(file);
  } catch (err) {
    jsonfile.writeFileSync(DATA_FILE, data, { spaces: 2 });
  }

  console.log(data);

};
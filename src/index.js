#!/usr/bin/env node
const program = require('commander');

program.version('0.1.0');

// Import commands
require('./commands/list');
require('./commands/add');

// Parse Args
program.parse(process.argv);

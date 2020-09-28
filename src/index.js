#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program.version(package.version);

// Import commands
require('./commands/list');
require('./commands/add');
require('./commands/show');
require('./commands/remove');
require('./commands/clear');
require('./commands/edit');

// Parse Args
program.parse(process.argv);

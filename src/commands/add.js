#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const { showError, showSuccess, showHelpNote } = require('../utils');
const { readDataFile, writeDataFile } = require('../dataHandler');

program
  .description('Add a new aha moment.')
  .command('add')
  .option('-s, --status <status>', 'Set status. Acceptable values: pending (default), done, cancelled')
  .action((options) => {
    if (!options.args || !options.args[0]) {
      showError('Please provide a title.');
      return;
    }
    
    const data = readDataFile();

    if (options.status && !['done', 'cancelled'].includes(options.status)) {
      showError('Status parameter could be pending (default), done, or cancelled.');
      return;
    }

    data.lastId = data.lastId + 1 || 1;
    data.rows.push({
      id: data.lastId,
      title: options.args[0],
      status: options.status || 'pending',
      createdAt: new Date(),
    });
    writeDataFile(data);

    showSuccess('Your aha moment has been successfully saved.');
    showHelpNote('You can use `aha list` to see all your aha moments.');
    console.log();
  });

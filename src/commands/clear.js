#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { showSuccess, showEmptyMessage } = require('../utils');
const { readDataFile, writeDataFile } = require('../dataHandler');

program
  .description('Clear all your aha moments.')
  .command('clear')
  .action((options) => {
    const data = readDataFile();

    if (!data.rows.length) {
      showEmptyMessage();
      return;
    }
    
    const questions = [
      {
        type: 'confirm',
        name: 'confirm',
        default: false,
        message: 'Are you sure you want to delete all your aha moments?',
      }
    ];
    

    // Ask question
    prompt(questions).then((answers) => {
      if (answers.confirm) {
        writeDataFile({ rows: [] });
        showSuccess('Your aha moments have been successfully cleared.');
      }
    });
    
  });

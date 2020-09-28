#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const chalk = require('chalk');
const { showError, showSuccess, showHelpNote } = require('../utils');
const { readDataFile, writeDataFile } = require('../dataHandler');

const addItem = (data, item) => {
  data.lastId = data.lastId + 1 || 1;
  item.id = data.lastId;
  const date = new Date();
  item.createdAt = date;
  item.updatedAt = date;
  data.rows.push(item);

  writeDataFile(data);

  showSuccess('Your aha moment has been successfully saved.');
  showHelpNote('You can use `aha list` to see all your aha moments.');
  console.log();
}

program
  .description('Add a new aha moment.')
  .command('add')
  .action((options) => {
    const data = readDataFile();

    // Handle quick add
    if (options.args[0]) {
      addItem(data, {
        title: options.args[0],
        status: 'pending',
      });
      return;
    }
    
    const questions = [
      {
        type: 'input',
        message: 'Title:',
        name: 'title',
        validate: value => (value.length ? true : 'Please enter a title.'),
      },
      {
        type: 'list',
        message: 'Status:',
        name: 'status',
        choices: [
          {
            name: chalk.yellow('Pending'),
            value: 'pending',
          },
          {
            name: chalk.green('Done'),
            value: 'done',
          },
          {
            name: chalk.red('Cancelled'),
            value: 'cancelled',
          },
        ],
        default: 'pending',
      }
    ];
    

    // Ask question
    prompt(questions).then((answers) => {
      addItem(data, answers);
    });
    
  });

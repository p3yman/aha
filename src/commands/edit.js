#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const chalk = require('chalk');
const { showError, showSuccess, showEmptyMessage } = require('../utils');
const { readDataFile, writeDataFile } = require('../dataHandler');

const addItem = (data, item) => {
  data.lastId = data.lastId + 1 || 1;
  item.id = data.lastId;
  item.createdAt = new Date();
  data.rows.push(item);

  writeDataFile(data);

  showSuccess('Your aha moment has been successfully saved.');
  showHelpNote('You can use `aha list` to see all your aha moments.');
  console.log();
}

/**
 * Truncate text if it's to long
 * @param text
 * @param length
 * @return {string}
 */
const truncate = (text, length = 25) => (text.length > length ? `${text.substring(0, length)}...` : text);

/**
 * Make item
 * @param {object} row 
 * @return {object}
 */
const makeItem = (row) => {
  return {
    name: `${row.id}) ${truncate(row.title, 75)}`, 
    value: row.id,
  };
}

program
  .description('Edit an aha moment.')
  .command('edit')
  .action((options) => {
    // Read current list of rows
    let data = readDataFile();
    if (!data.rows.length) {
      showEmptyMessage();
      return;
    }

    let item;

    // Handle if id is provided
    if (options.args[0]) {
      item = data.rows.find(el => el.id === +options.args[0]);

      if (!item) {
        showError('No such item found with id ' + options.args[0]);
        return;
      }

      console.log(`Editing: ${item.title}`);
    }

    const questions = [
      {
        type: 'input',
        message: 'New title: (Leave empty to skip)',
        name: 'title',
      },
      {
        type: 'list',
        message: 'New status:',
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
        default: item ? item.status : 'pending',
      }
    ];

    if (!item) {
      questions.unshift({
        type: 'list',
        message: 'Selecte the item to remove:',
        name: 'item',
        choices: data.rows.map(el => makeItem(el)),
        pageSize: 10,
      });
    }

    // Ask question
    prompt(questions).then((answers) => {
      if (!item) {
        item = data.rows.find(el => el.id === +answers.item);
      }

      const index = data.rows.findIndex(el => el.id === item.id)
      if (answers.title) {
        data.rows[index].title = answers.title;
      }
      data.rows[index].status = answers.status;
      data.rows[index].updatedAt = new Date();
      writeDataFile(data);

      showSuccess('Your aha moment has been updated successfully');
    });
    
  });

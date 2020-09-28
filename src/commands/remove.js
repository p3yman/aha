#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const chalk = require('chalk');
const dayjs = require('dayjs');
const { showError, showSuccess, showEmptyMessage } = require('../utils');
const { readDataFile, writeDataFile } = require('../dataHandler');

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

/**
 * Remove an item from the list by ID
 * 
 * @param {object} data 
 * @param {number} id 
 */
const removeItem = (data, id) => {
  data.rows = data.rows.filter(el => el.id !== +id);
  writeDataFile(data);
  showSuccess('item has been successfully removed.');
}

program
  .description('Show a aha moment by ID.')
  .command('remove')
  .action((options) => {
    // Read current list of rows
    let data = readDataFile();
    if (!data.rows.length) {
      showEmptyMessage();
      return;
    }

    // Handle if id is provided
    if (options.args[0]) {
      const item = data.rows.find(el => el.id === +options.args[0]);

      if (!item) {
        showError('No such item found with id ' + options.args[0]);
        return;
      }

      removeItem(data, options.args[0]);
      return;
    }

    const questions = [
      {
        type: 'list',
        message: 'Selecte the item to remove:',
        name: 'item',
        choices: data.rows.map(el => makeItem(el)),
        pageSize: 10,
      },
      {
        type: 'confirm',
        name: 'confirm',
        default: false,
        message: 'Are you sure you want to delete this item?',
      }
    ];

    // Ask question
    prompt(questions).then((answers) => {
      if (!answers.confirm) {
        return;
      }

      removeItem(data, answers.item);
    });

  });

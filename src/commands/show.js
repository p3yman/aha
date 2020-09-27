#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const dayjs = require('dayjs');
const { table, getBorderCharacters } = require('table');
const { showError, statusLabel } = require('../utils');
const { readDataFile } = require('../dataHandler');

program
  .description('Show a aha moment by ID.')
  .command('show')
  .action((options) => {
    if (!options.args[0]) {
      showError('Please provide an ID.');
      return;
    }

    const data = readDataFile();

    if (!data.rows.length) {
      console.log( '\n   ' + chalk.black.bgYellow(' You don\'t have any aha moments for now. You can add one using ' + chalk.bgGreen(' aha add "title" ') + ' command.') + '\n');
      return;
    }

    const row = data.rows.find(el => el.id === +options.args[0]);

    if (!row) {
      showError('No aha moment found for this ID.');
      return;
    }

    // Show head
    const config = {
      columns: {
        0: {
          width: 80,
          wrapWord: true,
        },
      },
    };
    const rows = [
      [chalk.yellow.bold(row.title)],
      [
        chalk.blue('ID: ') + row.id + '\n'
        + chalk.blue('Created at: ') + dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss') + '\n'
        + chalk.blue('Status: ') + statusLabel(row.status)
      ]
    ];
    output = table(rows, config);
    console.log(output);
    
  });

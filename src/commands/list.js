#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const { table } = require('table');
const { showHelpNote, statusLabel } = require('../utils');
const { readDataFile } = require('../dataHandler');

program
  .description('List all your aha moments.')
  .command('list')
  .action((options) => {
    const config = {
      columns: {
        0: {
            alignment: 'left',
            width    : 3,
        },
        1: {
            alignment: 'left',
            width    :  60,
        },
        2: {
            alignment: 'left',
            width    :  11,
        },
      },
    };

    const data = readDataFile();

    if (!data.rows.length) {
      console.log( '\n   ' + chalk.black.bgYellow(' You don\'t have any aha moments for now. You can add one using ' + chalk.bgGreen(' aha add "title" ') + ' command.') + '\n');
      return;
    }

    const rows = [
      [
        chalk.blue.bold('ID'),
        chalk.blue.bold('Title'),
        chalk.blue.bold('Status'),
      ],
    ];

    if (data.rows) {
      data.rows.forEach((row) => {
        rows.push([
          row.id,
          chalk.yellow.bold(row.title),
          statusLabel(row.status),
        ]);
      });
    }

    const output = table(rows, config);
    console.log(output);

    showHelpNote('To see the details, you could use `aha show 23` which 23 is the ID of the aha moment.');
    showHelpNote('To change the status, you could use `aha status 24 "done"`.');
    showHelpNote('To delete a aha moment, use `aha remove 48`.');
    console.log();

  });

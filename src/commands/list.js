#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const { table } = require('table');
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
            width    : 40,
        },
        2: {
            alignment: 'left',
        },
        3: {
          alignment: 'left',
        },
      },
    };

    const data = readDataFile();
    const rows = [
      [
        chalk.blue.bold('ID'),
        chalk.blue.bold('Title'),
        chalk.blue.bold('Status'),
        chalk.blue.bold('Created at')
      ],
    ];

    if (data.rows) {
      data.rows.forEach((row, index) => {
        rows.push([
          index+1,
          row.title,
          1,
          1,
        ]);
      });
    }

    const output = table(rows, config);
    console.log(output);
  });

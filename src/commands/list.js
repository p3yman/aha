#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const { table } = require('table');

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
            width    : 30,
        },
        2: {
            alignment: 'left',
        },
        3: {
          alignment: 'left',
        },
      },
    };

    const data = [
      [chalk.blue.bold('ID'), chalk.blue.bold('Title'), chalk.blue.bold('Status'), chalk.blue.bold('Created at')],
      [1, 'The title', chalk.black.bgGreen.bold(' Done '), 'Yesterday'],
      [999, 'The title', 'Pending', 'Yesterday'],
    ];

    const output = table(data, config);
    console.log(output);
  });

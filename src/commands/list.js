#!/usr/bin/env node
const program = require('commander');

program
  .description('List all your aha moments.')
  .command('list')
  .action((options) => {
    console.log('List command called');
  });

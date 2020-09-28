const chalk = require('chalk');

/**
 * Show help note on the console with the specified style.
 * 
 * @param {string} note 
 */
const showHelpNote = (note) => console.log( '   ' + chalk.black.bgYellow(' NOTE ') + chalk(` ${note} `) );

/**
 * Show error message
 * 
 * @param {string} msg 
 */
const showError = (msg) => console.log( '\n   ' + chalk.white.bgRed(' ERROR ') + chalk.bold(` ${msg} `) + '\n');

/**
 * Show success message
 * 
 * @param {string} msg 
 */
const showSuccess = (msg) => console.log( '\n   ' + chalk.black.bgGreen(' SUCCESS ') + chalk.bold(` ${msg} `) + '\n');

/**
 * Show message if list is empty
 */
const showEmptyMessage = () =>  console.log( '\n   ' + chalk.yellow(' You don\'t have any aha moments for now. You can add one using `' + chalk.bold('aha add "title"') + '` command.') + '\n');

/**
 * Show proper label for status.
 * 
 * @param {string} status 
 */
const statusLabel = (status) => {
  if (status === 'done') {
    return chalk.green('Done');
  } else if (status === 'pending') {
    return chalk.yellow('Pending');
  } else if (status === 'cancelled') {
    return chalk.red('Cancelled');
  }
};

module.exports = {
  showHelpNote,
  showError,
  showSuccess,
  statusLabel,
  showEmptyMessage,
}

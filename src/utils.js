const chalk = require('chalk');

/**
 * Show help note on the console with the specified style.
 * 
 * @param {string} note 
 */
const showHelpNote = (note) => console.log( '   ' + chalk.black.bgYellow(' NOTE ') + chalk.white.bgGray(` ${note} `) );

/**
 * Show error message
 * 
 * @param {string} msg 
 */
const showError = (msg) => console.log( '\n   ' + chalk.white.bgBlack(' ERROR ') + chalk.black.bgRed(` ${msg} `) + '\n');

/**
 * Show success message
 * 
 * @param {string} msg 
 */
const showSuccess = (msg) => console.log( '\n   ' + chalk.black.bgGreen(' SUCCESS ') + chalk.white.bgGray(` ${msg} `) + '\n');

/**
 * Show proper label for status.
 * 
 * @param {string} status 
 */
const statusLabel = (status) => {
  if (status === 'done') {
    return chalk.black.bgGreen(' Done ');
  } else if (status === 'pending') {
    return chalk.black.bgYellow(' Pending ');
  } else if (status === 'cancelled') {
    return chalk.black.bgRed(' Cancelled ');
  }
};

module.exports = {
  showHelpNote,
  showError,
  showSuccess,
  statusLabel,
}

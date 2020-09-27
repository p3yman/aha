const chalk = require('chalk');

/**
 * Show help note on the console with the specified style.
 * 
 * @param {string} note 
 */
const showHelpNote = (note) => console.log( chalk.black.bgYellow(' NOTE ') + chalk.white.bgGray(` ${note} `) );

module.exports = {
  showHelpNote,
}

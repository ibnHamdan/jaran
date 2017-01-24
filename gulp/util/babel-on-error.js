var chalk = require('chalk');

module.exports = (err) => {
    console.log(
    chalk.red(
      err.fileName +
      (
          err.loc ?
          '(' + err.loc.line + ',' + err.loc.column + '): ' :
          ': '
      )
    ) +
    'error Babel: ' + err.message + '\n' +
    err.codeFrame
  );
};
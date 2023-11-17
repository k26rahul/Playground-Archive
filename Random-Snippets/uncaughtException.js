let chalk = require('chalk');
let log = require('./log.js');

process.on('uncaughtException', error => {
	log(error);
	log(chalk.red.bgWhite`🩳 uncaughtException 🩳`);
	process.exit(1);
});
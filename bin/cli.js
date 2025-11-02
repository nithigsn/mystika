#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

program
  .version('0.0.1')
  .description('Mystika - Secrets management for developers');

program
  .command('init')
  .description('Initialize Mystika and learn about secrets')
  .action(() => {
    console.log(
      chalk.blue(
        figlet.textSync('Mystika', { horizontalLayout: 'full' })
      )
    );
    
    console.log(chalk.yellow('\n🔐 Mystika (μυστικά) - Greek for "secrets"'));
    console.log(chalk.white('\nWelcome to secure secrets management!'));
    console.log(chalk.gray('\nComing soon:'));
    console.log(chalk.white('  mystika get-secrets -p project -b branch'));
    console.log(chalk.white('  mystika set-secret -p project -b branch -k key -v value'));
    console.log(chalk.white('  mystika logs --status legit/fake'));
    console.log(chalk.gray('\nStay tuned for updates! 🚀'));
  });

program.parse(process.argv);
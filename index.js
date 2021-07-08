#!/usr/bin/env node


const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Generator')

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-pwdf, --password-for <type>', 'Password for? , REQUIRED')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const { length, save, passwordFor, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if (save) {
    if(passwordFor){
        savePassword(generatedPassword, passwordFor)
    }else{
        log(chalk.redBright('Password Not saved! Provide --password-for option.'))
    }
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))





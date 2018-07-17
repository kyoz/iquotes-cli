#!/usr/bin/env node

'use strict';

const iquotes = require('iquotes');
const chalk = require('chalk');
const meow = require('meow');
const wrapAnsi = require('wrap-ansi');
const termSize = require('term-size');

const cli = meow(`
  Examples
    $ iquotes 
    "Strive not to be a success, but rather to be of value." - Albert Einstein (Life)
    $ iquotes --life
    "If you really want to do something, you'll find a way. If you don't, you'll find an excuse." - Jim Rohn (Life)
    ...
    
  Options
    --life Get random life quote
    --love Get random love quote
    --dev  Get random dev quote
`);

function formatQuote(_quote) {
  let category;
  const quote = chalk.whiteBright(_quote.quote);
  const author = chalk.hex('#ffa15e')(_quote.author);

  switch (_quote.category) {
    case 'Life':
      category = chalk.hex('#66ff99')(_quote.category);
      break;
    case 'Love':
      category = chalk.hex('#ff99ff')(_quote.category);
      break;
    case 'Dev':
      category = chalk.hex('#03a9f4')(_quote.category);
      break;
    default:
      category = chalk.whiteBright(_quote.category);
  }

  return `"${quote}" - ${author} (${category})`;
}

function printQuote() {
  const quote = cli.flags.life ? iquotes.random('life') :
    cli.flags.love ? iquotes.random('love') :
      cli.flags.dev ? iquotes.random('dev') : iquotes.random();

  console.log(wrapAnsi(formatQuote(quote), termSize().columns));
}

printQuote();

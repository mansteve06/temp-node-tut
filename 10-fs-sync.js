// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// Fs module or file system module
// 2 types of Fs module: 
// - syncronus: blocking
// - Asyncronus: no blocking


// 1. fs syncronus

const {readFileSync, writeFileSync} = require('fs');  

// read a file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// write a file (if not there it willl be created or ovewrite)
writeFileSync('./content/steve.txt', 'my name is mansteve')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
)

writeFileSync('./content/steve.txt', ' manariyo steve', {flag: 'a'}) // a- append or add to the texte


/*
const fs = require('fs');

// read a file
const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');

// write a file (if not there it willl be created or ovewrite)
fs.writeFileSync('./content/steve2.txt', 'my name is mansteve2')
*/

console.log(first, second)

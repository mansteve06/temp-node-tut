// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// Fs module or file system module
// 2 types of Fs module: 
// - syncronus: blocking
// - Asyncronus: no blocking



// sync works line by line:  
// start     - done with this task       - starting next task 
// if the file takes long the app can go down

const {readFileSync, writeFileSync} = require('fs');  
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')

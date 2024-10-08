// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// Fs module or file system module
// 2 types of Fs module: 
// - syncronus: blocking
// - Asyncronus: no blocking


// 2. fs Asyncronus      // we need to provide a callback

const {readFile, writeFile} = require('fs');  

// read a file.   we need to provide a callback
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    console.log(result)
})


/*
const fs = require('fs');

// read a file.   we need to provide a callback
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    console.log(result)
})
*/
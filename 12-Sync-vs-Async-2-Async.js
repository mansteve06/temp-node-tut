// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// Fs module or file system module
// 2 types of Fs module: 
// - syncronus: blocking
// - Asyncronus: no blocking











// Asyncronus: the app keep serving others users even if the file is big 
// start - starting next task - done with this task 

const {readFile, writeFile} = require('fs');  

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return 
        }
        const second = result;



        //write a file
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`
            , (err, result) => {
                if(err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            }
        )

        writeFile(
            './content/steve-async.txt', 
            'my name Async fs'
            , (err, result) => {
                if(err) {
                    console.log(err)
                    return;
                }
                //console.log(result)
                console.log('done with this task')
            }
        )

    })    
})
console.log('starting next task')
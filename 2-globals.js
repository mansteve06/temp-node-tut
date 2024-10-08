console.log(__dirname);   // path to current directory
console.log(__filename); // file name
console.log(require);  // function to use modules (commonJS)
console.log(module);  // info about current module (file)
console.log(process); // info about env where the programm is being executed 

setInterval(() => {
    console.log("hello world"); 
}, 2000) // every 2 sec 

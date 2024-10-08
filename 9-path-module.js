// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// path module

const path = require('path')

console.log(path.sep) // return /

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

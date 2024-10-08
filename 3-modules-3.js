// Modules
// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');  // require works as import in js
const sayHi = require('./5-utils');  // require works as import in js
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data)
console.log(names)

sayHi('susan')
sayHi('john')
sayHi(names.john) // we can also do this
sayHi('peter')
sayHi(names.peter) // we can also do this

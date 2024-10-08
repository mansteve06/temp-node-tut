// Modules
// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)

const secret = 'SUPER SECRET'
const john = "john"
const peter = "peter"

const sayHi = (name) => {
    console.log(`hello there ${name}`)
}

sayHi('susan')
sayHi('john')
sayHi('peter')

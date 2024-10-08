// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// os module


const os = require('os') // os - operating system

// info about current user
const user =os.userInfo()
console.log(user)

// method return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
console.log(os.freemem()); // mine

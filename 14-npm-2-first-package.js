// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// npm first package  // Node Package Manager - NPM
// site: https://www.npmjs.com/

// lodash package


/* we can add dependencies */
// in the console type: npm i lodash
// lodash dependencie will be added to package.json
// and node_modules folder will apper on the lest in the explorer
// node_modules is where all dependencies are stored

// if we type: npm i bootstrap, bootstrap packages will come with others dependencies

const _ = require('lodash')

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

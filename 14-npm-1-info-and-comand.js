// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// npm info  // Node Package Manager - NPM
// site: https://www.npmjs.com/
// packages dependencies modules: all mean the same

// when we instal node , we also install npm .  npm -- version in termminal

// npm - global commmand, commes with node
// npm --version

/* we can instal a package as a local dependencie or global*/ 
// local dependency - use it only in this particular project
// npm i <packageName>   (i = install)

// global dependency - use it in any project
// npm install -g <packageName>         // -g means global
// sudo npm install -g <packageName> (mac)     // -g means global

// package.json - manifest file (stores important info about project/package)
/* 3 way to create package.json */
// - manual approch (create package.json in the root, create properties etc)
// - npm init (step by step, press enter to skip then yes at the end)
// - npm init -y (eveerithing default)
// we use onee of the last 2, preferably: - npm init -y (eveerithing default)
// in the console or terminal, in the folder that conteins you code,
// just type: npm init -y  
// package.json will appear in the folder, you can see it on the left in explorer
// you can delete it if you want and createe it again usin any method or open and edit it

/* we can add dependencies */
// in the console type: npm i lodash
// lodash dependencie will be added to package.json
// and node_modules folder will apper on the lest in the explorer
// node_modules is where all dependencies are stored

// if we type: npm i bootstrap, bootstrap packages will come with others dependencies
// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// http module


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req) // we need to reflesh the web page in the brrowser to see this big object
    
    res.write('welcome to our home page')
    res.end()
})

server.listen(5000) // then open a browser and type: http://localhost:5000/
// Built-in Modules 
// site: https://nodejs.org/docs/latest-v20.x/api/index.html
// http module

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page') // open: http://localhost:5000/
    }
    if (req.url === '/about') {
        res.end('here is our short hystory') //open:  http://localhost:5000/about
    }
    // if the user asks for the page that doesn't exist
    res.end(`
        <h1>Ooops</h1>
        <p>we can't seem to find the page you are looking for !</p>
        <a href="/">back home</a>
    `) // open: http://localhost:5000/nyet or: http://localhost:5000/photo , http://localhost:5000/errorv
})

server.listen(5000) // then open a browser and type: http://localhost:5000/
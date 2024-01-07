const http = require('node:http');
const url = require('url'); // Include the url module
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Check the pathname and return a specific response
    if (pathname === '/test') {
        res.end('You reached /test\n');
    } 
    else {
        res.end('Hello World\n');
    }
    console.log(`Request url is: ${req.url}, parsed url: ${pathname}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

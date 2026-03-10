const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome to our first webserver!");
    } else if (req.url === '/about') {
        res.end("here is your short history");
    } else {
        res.end(`
            <h1>Oops</h1>
            <p>we cant have the page you are looking for</p>
            <a href='/'>back home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
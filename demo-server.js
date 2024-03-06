const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Home pages");   
    }
});

server.listen(3000, () => {
    console.log("Listening to port 3000");
});
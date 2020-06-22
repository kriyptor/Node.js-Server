const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Namaste World, This is a Server!');
    res.end;
}).listen(5000, () => console.log('Server is runing....')); //listener
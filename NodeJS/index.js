//servidor con node
// const http = require('http');   

// const colors = require('colors');

// const handleServer = function(req, res){
//     res.writeHead(200, { 'Content-type': 'text/html' })
//     res.write('<h1>Hola Mundo</h1>');
//     res.end();
// };

// const server = http.createServer(handleServer);


// server.listen(3000, function() {
//     console.log('Server on port 3000'.green);
// });


//servidor con express
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function (req, res){
    res.send('<h1>Hola mundo con express y nodejs</h1>')
})

server.listen(3000, function() {
    console.log('server port 3000'.red)
});
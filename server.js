
// socket dient om data uit te wisselen tussen clients - servers (voor de server gebruiken we framework nodejs). 

// om JS te kunnen gebruiken tussen de browser en de server hebben we Node package Express nodig 

// eerst in terminal cmd: sudo npm init 
// een file package.json wordt aangemaakt

// dan: sudo npm install express --save
// map node_modules wordt aangemaakt

// next: sudo npm install socket.io --save

var express = require('express');

var app = express();
var server = app.listen(3000);

// alles in map 'public' wordt gebruikt voor de canvas app met de p5-sketch

app.use(express.static('public'));

console.log("My server is running ...");

// library function 'socket' wordt aangemaakt

var socket = require('socket.io');

// io zal hieronder de trafiek bijhouden op de server (naar de clients)

// in main.html moeten de <scripts> lib p5 en de cdn voor socket.io client bijgevoegd worden ...

var io = socket(server);

// met io en sockets wordt een connectie aangemaakt

io.sockets.on('connection', newConnection);

app.get('/', function(request,response) {
    response.sendFile(__dirname + '/public/index.html');
});

function newConnection(socket) {
    console.log('new connection: ' + socket.id);
    
    socket.on('chat.message', function(message) {
        io.emit('chat.message', message);
    });

    socket.on('mouse', mouseMsg);

    // canvas tekeningen worden tsn de clients en de server uitgewisseld

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);

        //met onderstaande regel wordt de tekening nog eens terug naar afzender gestuurd, wat niet nodig is !!

        // io.sockets.emit('mouse', data);

        console.log(data);
    }
}


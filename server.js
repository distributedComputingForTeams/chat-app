const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const p2p = require('socket.io-p2p-server').Server;

io.use(p2p);

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'bundle.js'));
});

app.use((req, res) => {
  res.sendStatus(404);
});

http.listen(3000, () => console.log('listening on Port 3000'));


// Once signalling is complete (via sockets), communication is handled directly 
// between clients, and the server is not needed to pass information among clients

// io.on('connection', (socket) => {
//   socket.emit('socket-connected', { hello: 'world' });

//   socket.on('send-message', (data) => {
//     console.log('server received')
//     socket.broadcast.emit('send-message', data);
//   });
// });






// var server = require('http').createServer();
// var io = require('socket.io')(server);
// var p2p = require('socket.io-p2p-server').Server;
// io.use(p2p);
// server.listen(3030);




// const express = require('express');
// const path = require('path');

// const app = express();
// const server = require('http').Server(app);

// const p2pserver = require('socket.io-p2p-server').Server;
// const io = require('socket.io')(server);


// app.use('/', express.static(path.join(__dirname, 'client')));

// app.get('/bundle.js', (req, res) => {
//   res.sendFile(path.join(__dirname, 'bundle.js'));
// });

// app.use((req, res) => {
//   res.sendStatus(404);
// });

// io.use(p2pserver);

// app.listen(3030);
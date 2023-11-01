const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

// inicializacion
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings
// process.env.PORT para aquellos dispositivos cuyo servidor fue previamente establecido manualmente
app.set('port', process.env.PORT || 3000);

// sockets
require('./sockets')(io);

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// set, ready, server!
server.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
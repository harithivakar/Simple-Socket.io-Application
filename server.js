const express = require('express');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();

const server = http.createServer(app);

io = socketio(server);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});


//Node server which will handle socket io connections
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

users={};
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('new-user-joined', (namep) =>{
                console.log("new user", namep);
                users[socket.id]=namep;
                socket.broadcast.emit('user-joined', namep);
            });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    //if someone sends a mesage, broadcast to others
    socket.on('send', message=>{
        console.log("here");
        socket.broadcast.emit('receive', {message: message, namep:users[socket.id]})
    });

    //if someone leaves chat tell otherd
    socket.on('disconnect', message=>{
        console.log("here");
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
  });  

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      socket.broadcast.emit('chat message', msg);
      console.log('message: ' + msg);
    });
  });
let port=process.env.PORT||8003;
server.listen(port, () => {
  console.log('listening on *:8003');
});

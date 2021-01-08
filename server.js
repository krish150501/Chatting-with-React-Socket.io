const express = require("express");
const app = express();
const http = require("http").createServer(app)

const io = require('socket.io')(http)
const cors = require('cors');

app.use(cors());

io.on("connection", socket => {
  socket.on('user',(details)=>{
    console.log(details);
    socket.broadcast.emit('details',details)
  })
socket.emit('id',socket.id)
    socket.on('chat message', (data) => {
        io.emit('received',data)
      });
      
    })


http.listen(8000, () => console.log("server is running on port 8000"));
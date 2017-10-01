var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.use(express.static('.'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var numUsers = 0;

io.on('connection', function(socket){
  ++numUsers; 

  if (numUsers % 2){ //odd -> create new room
  	socket.room ='room'+ ((numUsers + 1) / 2);
  } 
  else {
	socket.room ='room' + (numUsers/2);
	// notify the user that he is user 2
	socket.broadcast.to(socket.room).emit('player2');
  }

  socket.join(socket.room)

  console.log('a user connected: '+numUsers+' user(s), room: '+socket.room);
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  socket.on('disconnect', function(){
  	--numUsers;
    console.log('user disconnected: '+numUsers+' left');
  });
});

expressServer = http.listen(port, function(){
  console.log('listening on *:' + port);
});

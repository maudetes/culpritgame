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
var player;
var rooms = {};


io.on('connection', function(socket){
  ++numUsers; 
    var key;
  // manage rooms

  // first case : play with a foreigner
  socket.on('FindForeigner', function(){
  	var foundForeigner = false;
  	console.log("FindForeigner");
  	for (key in rooms){
  		if (rooms[key]["status"] === "waitForForeigner"){
  			// join a foreigner
  			foundForeigner = true;
  			rooms[key]["status"] = "full";
  			rooms[key]["player2"] = socket.id;
  			socket.room = 'room' + key;
  			socket.join(socket.room);
  			socket.broadcast.to(socket.room).emit('getStarted');	
  			socket.emit('info', {'player': 2, 'room': socket.room});
  			socket.emit('getStarted');
  			break;
  		}
  	};

  	// create room to wait for a foreigner
  	if(!foundForeigner){
  		// search for first room number
  		console.log("CreateRoom");
  		key = 0;
  		while(key in rooms)
  			key ++;
  		socket.room = 'room' + key;
  		rooms[key] = {
  			"status": "waitForForeigner",
  			"player1": socket.id,
  			"name": socket.room
  		};
  		socket.join(socket.room);
  		console.log(socket.id);
  		socket.emit('info', {'player': 1, 'room': socket.room});
  	}
  })

  // second case : play with a friend
  socket.on('PlayWithFriend', function(data){
  	var foundFriend = false;
  	// WaitForFriend
  	if (data["status"] == "waitForFriend"){
	  	for (key in rooms){
	  		if (rooms[key]["name"] == data["roomName"]){
	  			socket.emit("doItAgain", data);
	  			return;
	  		}
	  	};
	  	console.log('data recieved: ' + data['roomName']);
	  	key = 0;
		while(key in rooms)
			key ++;
		socket.room = data['roomName'];
		rooms[key] = {
			"status": "waitForFriend",
			"player1": socket.id,
			"name": socket.room
		};
		socket.join(socket.room);
		socket.emit("info", {"player": 1, "room": socket.room});
	} else { 
		// FindFriend
		for (key in rooms){
	  		if (rooms[key]["name"] == data["roomName"] && rooms[key]["status"] == "waitForFriend"){
	  			foundFriend = true;
	  			rooms[key]["status"] = "full";
	  			socket.room = data['roomName'];
				socket.join(socket.room);
				socket.emit("info", {"player": 2, "room": socket.room});
				socket.broadcast.to(socket.room).emit('getStarted');
				socket.emit('getStarted');
	  			return;
	  		}
	  	};

	  	if (!foundFriend)
	  		socket.emit("doItAgain", data);
	}
  });

  // manage choices
  socket.on('choiceToServer', function(data){
  	console.log('recieved message from '+ data['sender']+ '!')
  	socket.to(data['room']).emit('choice', {
  		'sender' : data['sender'],
  		'situation' : data['situation'], 
		'choice' : data['choice']
  	});
  });

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

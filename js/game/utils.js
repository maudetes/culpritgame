function Genderize(){
	if (player == 2)
		return 'e';
	return '';
}

function SendChoice(room, situation, choice){
	socket = io();
	socket.in(room).emit('choice', player, situation, choice);
}

socket.on('choice', function(sender, situation, choice){
	if (sender != player)
		alert(situation + ': ' + choice);
})

socket.on('arrived', function(){
	if (ready){
	 	N("Un autre joueur t'a rejoint.");
		Launch_Game();
	}
	else {
		ready = true;
	}
})

socket.on('info', function(info){
	player = info['player'];
	room = info['room'];
})
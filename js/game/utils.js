function Genderize(){
	if (player == 2)
		return 'e';
	return '';
}

function SendChoice(room, situation, choice){
	socket = io();
	socket.emit('choiceToServer',  {
		'room': room, 
		'sender' : player, 
		'situation' : situation, 
		'choice' : choice});
}

socket.on('choice', function(data){
	console.log('recieved package!!!');
	if (player != data['sender'])
		alert(data['situation'] + ': ' + data['choice']);
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
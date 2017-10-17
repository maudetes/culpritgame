function Genderize(){
	if (player == 2)
		return 'e';
	return '';
}

function SendChoice(room, choice, message){
	socket = io();
	socket.emit('choiceToServer',  {
		'room': room, 
		'sender' : player, 
		'choice' : choice,
		'message' : message
	});
	console.log("sent2");
}

function SendChoiceIf(character, room, choice, message){
	if ((player == 1 && character == "Frank") || (player == 2 && character == "Anna")){
		SendChoice(room, choice, message);
		console.log("sent");
	}
}

socket.on('choice', function(data){
	console.log('recieved package!!!');
	if (player != data['sender']){
		alert(data['choice']);
		map = {"Gang": Gang, "AccuseAnna" : AccuseAnna, "KateWasInnocent" : KateWasInnocent,
			   "Lovers": Lovers, "HoldUp": HoldUp, "OpenMinded": OpenMinded};
		map[data["choice"]](data["message"]);
	}
})

socket.on('getStarted', function(){
	if (player == 1)
		N("Anna Collins t'a rejoint.");
 	else
 		N("Frank Prescott t'attendait.");
	Launch_Game();
})

socket.on('info', function(info){
	console.log("infos reçues");
	player = info['player'];

	if (player == 1){
		// Frank Prescott.
		F = new Character({ align:"right", background:"#333", sound:"text_high" });

		// Anna Collins.
		A = new Character({ align:"left", background:"#DDD", sound:"text_high" });
	} else {
		// Frank Prescott.
		F = new Character({ align:"left", background:"#333", sound:"text_high" });

		// Anna Collins.
		A = new Character({ align:"right", background:"#DDD", sound:"text_high" });
	}

	room = info['room'];
	if (player ==1){
		N("Tu es Frank Prescott.");
		N("Tu attends ta partenaire...");
	} else
		N("Tu es Anna Collins.");
})

socket.on('doItAgain', function(data){
	document.getElementById("room_name").style.visibility = "visible";
	if (data["status"] == "waitForFriend"){
		document.getElementById("other_name_alert").innerHTML = "Le nom " + data["room_name"] +" est déjà pris, trouve un nom original !";
		document.getElementById("room_name").title = "waitForFriend";
	} else {
		document.getElementById("other_name_alert").innerHTML = "Le nom " + data["room_name"] +" ne correspond à aucune salle libre !";
		document.getElementById("room_name").title = "FindFriend";
	}
})

function send(e){
	var socket = io();
	socket.emit('PlayWithFriend', {
		"roomName": document.getElementById('name_input').value,
		"status": document.getElementById('room_name').title 
	});
	document.getElementById('room_name').style.visibility = "hidden";
	console.log(player);
}
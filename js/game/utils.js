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

socket.on('getStarted', function(){
	if (player == 1)
		N("Alice Dunne t'a rejoint.");
 	else
 		N("Frank Prescott t'attendait.");
	Launch_Game();
})

socket.on('info', function(info){
	console.log("infos reçues");
	player = info['player'];
	room = info['room'];
	if (player ==1){
		N("Tu es Frank Prescott.");
		N("Tu attends ta partenaire...");
	} else
		N("Tu es Alice Dunne.");
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
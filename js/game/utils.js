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
		map = {"Gang": Gang, "AccuseAnna" : AccuseAnna, "KateWasInnocent" : KateWasInnocent,
			   "Lovers": Lovers, "HoldUp": HoldUp, "OpenMinded": OpenMinded,
			   "AnnaSavedYou" : AnnaSavedYou, "AnnaIsNotKidding" : AnnaIsNotKidding,
			   "AnnaAccusesFrank" : AnnaAccusesFrank, "FrankCooperation" : FrankCooperation,
			    "FrankNoCooperation" : FrankNoCooperation, "FrankAccuses" : FrankAccuses, 
			   "BothWantCooperation" : BothWantCooperation,"AnnaAnswers" : AnnaAnswers,
			   "AnnaCantBeMe" : AnnaCantBeMe,"AnnaCantGoToPrison" : AnnaCantGoToPrison,
			   "EndingAgreementNext" : EndingAgreementNext
		};
		map[data["choice"]](data["message"]);
	}
})

socket.on('getStarted', function(){
	if (player == 1)
		N("Anna Collins t'a rejoint.");
 	else
 		N("Frank Prescott t'attendait.");
 	N("Attention, tous vos choix auront une importance !");
 	N("Soyez vigilant, chaque détail peut compter.")
	Launch_Game();
})

socket.on("disconnected", function(){
	if (player==1)
		alert("Oups ! Ta partenaire s'est déconnectée, réactualise pour recommencer une partie !");
	else
		alert("Oups ! Ton partenaire s'est déconnecté, réactualise pour recommencer une partie !");
})

socket.on('info', function(info){
	console.log("infos reçues");
	player = info['player'];

	if (player == 1){
		// Frank Prescott.
		F = new Character({ align:"right", background:"#C6714F", sound:"text_high" });

		// Anna Collins.
		A = new Character({ align:"left", background:"#A9A9F0", sound:"text_high" });
	} else {
		// Frank Prescott.
		F = new Character({ align:"left", background:"#C6714F", sound:"text_high" });

		// Anna Collins.
		A = new Character({ align:"right", background:"#A9A9F0", sound:"text_high" });
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
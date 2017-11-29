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

function sendRecap(object){
	socket = io ();
	socket.emit('recapToServer', {
		'room': room,
		'sender' : player,
		'recap' : object
	});
}

socket.on('choice', function(data){
	waitingForOther = false;
	console.log('recieved package!!!');
	if (player != data['sender']){
		map = {"Gang": Gang, "AccuseAnna" : AccuseAnna, "KateWasInnocent" : KateWasInnocent,
			   "SceneOneNext" : SceneOneNext,
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

socket.on('recap', function(data){
	console.log('recieved recap!!!');
	
	if(otherRecap == null){
		if (player != data['sender']){
			console.log(data["recap"]);
			otherRecap = data["recap"];
		}

		// launch scene3 if ready
		if (ready){
			if(player == 1)
				Start_Scene_3F();
			else
				Start_Scene_3A();
		} else {
			ready = true;
		}
	}
	else {
		if (player != data['sender']){
			console.log(data["recap"]);
			otherRecap = data["recap"];
		}

		// launch scene3 if ready
		if (ready){
			Start_Scene_4();
		} else {
			ready = true;
		}
	}

})

socket.on('getStarted', function(){
	if (player == 1)
		N("Anna Collins t'a rejoint.");
 	else
 		N("Frank Prescott t'attendait.");
 	N("Soyez vigilants, vos choix auront un impact sur votre sort et sur celui de votre partenaire.");
 	N("Chaque détail peut compter.")
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
		F = new Character({ align:"right", background:"#C8AE83", sound:"text_low" });

		// Anna Collins.
		A = new Character({ align:"left", background:"#B0B4BF", sound:"text_low" });
	} else {
		// Frank Prescott.
		F = new Character({ align:"left", background:"#C8AE83", sound:"text_low" });

		// Anna Collins.
		A = new Character({ align:"right", background:"#B0B4BF", sound:"text_low" });
	}

	if (player == 1)
		document.getElementById("waiting_for_other").innerHTML = "Anna réfléchit...";
	else
		document.getElementById("waiting_for_other").innerHTML = "Frank réfléchit...";

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

function focusOnEnter(e){
	var keycode = e.keyCode || e.which;  //for compatibility with IE < 9
	if(keycode == 13){ //13 is the enter char code
	    send();
	}
	return true;
}
function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////
	Show("background","starting_room");
	//////////////////////////////

	N("THE CULPRIT GAME");
	N("Un jeu pour briser les amitiés.");
	N("Est-ce que tu as 20 minutes et un ami pour y jouer ?");
	N("N'oublie pas de passer en mode plein écran (F11).");
	N("Nous te conseillons aussi d'utiliser des écouteurs.");

	Choose({
		"Commencer une partie.": Room,
		"C'est quoi ce jeu ?": Credits
	});
}

function Room(message){
	P(message);
	N("veux-tu rejoindre un ami, attendre un ami ou jouer avec le premier venu ?");
	Choose({
		"Rejoindre un ami": FindFriend,
		"Attendre un ami": WaitFriend,
		"Jouer avec un inconnu, au dépit de ce que me disait ma maman": FindForeigner
	});
}

function FindFriend(message){
	P(message);
	N("Ecris un nom de code que tu pourras partager à ton ami pour qu'il te rejoigne");
	document.getElementById("room_name").style.visibility = "visible";
	document.getElementById("room_name").title = "findFriend";

}

function WaitFriend(message){
	P(message);
	N("Ecris un nom de code que tu pourras partager à ton ami pour qu'il te rejoigne");
	document.getElementById("room_name").style.visibility = "visible";
	document.getElementById("room_name").title = "waitForFriend";
}

function FindForeigner(message){
	P(message);
	socket = io();
	socket.emit('FindForeigner');
}

function Play(message){

	if(player == 1){
		if (!ready){
			P(message);
			N("Tu es Frank Delacroix.");
			N("Tu es en attente d'Alice Dunne.");
			ready = true;
		}
		else{
			N("Tu es Frank Delacroix.");
			N("Alice Dunne t'a rejoint.");
			Launch_Game();
		}
	}
	else{
		P(message);
		N("Tu es Alice Dunne.");
		N("Frank Delacroix t'attendait.");
		Launch_Game();
	}
}

function Launch_Game(){

	N("Voici votre histoire...");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Clear();
	Start_Scene_1();
}

function Credits(message){

	P(message);
	
	N("Ah, eh bien ce jeu est un projet étudiant pour le cours IC06 !");
	N("C'est un cours sur l'industrie et la conception de jeux vidéo.");
	N("Il est enseigné à l'UTC.");
	P("...");
	N("Université de Technologie de Compiègne.");

	P("Et c'est vous qui l'avez fait ?");

	N("Nous sommes les trois scénaristes / programmeurs / artistes de ce jeu.");

	P("Wow ! Vous avez tout fait vous-même ?");

	N("Non, pas TOUT !");
	N("De nombreuses inspirations nous viennent du domaine public.")
	N("Toutes nos sources ou inspirations sont citées dans les crédits.")
	N("Es-tu prêt à jouer maintenant ?")

	Choose({
			"Commencer la partie.": Play
		});
}
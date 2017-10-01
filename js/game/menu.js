function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","interrogation_room_male");

	//////////////////////////////

	N("THE CULPRIT GAME");
	N("Un jeu pour briser les amitiés.");
	N("Est-ce que tu as 20 minutes et un ami pour y jouer ?");
	N("N'oublie pas de passer en mode plein écran (F11) !");

	Choose({
		"Créer une partie.": CreateGame,
		"Rejoindre une partie.": JoinGame,
		"Quel est ce jeu ?": Credits
	});
}

function CreateGame(message){
	
	P(message);
	N("Entre le nom de la partie que tu souhaites créer");
	N("(c'est avec ce nom que l'autre joueur pourra te rejoindre).");

	// afficher le champ de texte + bouton envoyer + choix du personnage	
	// récupérer le nom de la partie
	// appeler la fonction de la scène suivante
	Play_2();
}

function JoinGame(message){

	P(message);
	N("Entre le nom de la partie que tu souhaites rejoindre.");
	// afficher le champ de texte + bouton envoyer
	// récupérer le nom de la partie
	// appeler la fonction de la scène suivante
	Play_2();
}

function Play_2(){

	N("OK, c'est parti !");

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
			"Créer une partie.": CreateGame,
			"Rejoindre une partie.": JoinGame
		});
}
function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	if (player == 1)
		Show("background","interrogation_room_male");
	else
		Show("background","interrogation_room_female");

	//////////////////////////////

	N("THE CULPRIT GAME");
	N("Un jeu pour briser les amitiés.");
	N("Est-ce que tu as 20 minutes et un ami pour y jouer ?");
	N("N'oublie pas de passer en mode plein écran (F11) !");

	Choose({
		"Commencer la partie.": Play,
		"C'est quoi ce jeu ?": Credits
	});
}

function Play(message){

	if(player == 1){
		if (!ready){
			P(message);
			N("Tu es le joueur 1 (ajouter le nom).");	
			N("Tu es en attente d'un autre joueur.");
			ready = true;
		}
		else{
			N("Un autre joueur t'a rejoint.");
			Launch_Game();
		}
	}
	else{
		P(message);
		N("Tu es le joueur 2 (ajouter le nom).");
		N("La partie va bientôt commencer !");
		Launch_Game();
	}
}

function Launch_Game(){

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
			"Commencer la partie.": Play
		});
}
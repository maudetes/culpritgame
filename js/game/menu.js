// MENU: FIRST DISPLAYED SCREEN

var gameInfo = false;
var credits = false;

function Start() {

	$ = {};
	
	/////// SET UP SCENE ////////
	Show("background","starting_room");
	//////////////////////////////

	N("THE CULPRIT GAME");
	N("Un jeu narratif à partager à deux.");
	N("Est-ce que tu as 20 minutes et un·e ami·e pour y jouer ?");
	N("N'oublie pas de passer en mode plein écran (F11) et d'utiliser des écouteurs.");

	Choose({
		"Commencer une partie.": Room,
		"C'est quoi ce jeu ?": WhatIsThisGame,
		"Voir les crédits.": ShowCredits
	});
}

function Room(message) {
	P(message);
	N("Veux-tu rejoindre la partie d'un·e ami·e, créer une partie ou jouer avec un·e inconnu·e ?");
	Choose({
		"Rejoindre la partie d'un·e ami·e.": FindFriend,
		"Créer une partie.": WaitFriend,
		"Jouer avec un·e inconnu·e, au dépit de ce que me disait ma maman.": FindForeigner
	});
}

function FindFriend(message) {
	P(message);
	N("Écris le nom de code que t'as donné ton ami·e pour rejoindre sa partie.");
	document.getElementById("room_name").style.visibility = "visible";
	document.getElementById("room_name").title = "findFriend";

}

function WaitFriend(message) {
	P(message);
	N("Ecris un nom de code que tu pourras partager à ton ami·e pour pouvoir te rejoindre.");
	document.getElementById("room_name").style.visibility = "visible";
	document.getElementById("room_name").title = "waitForFriend";
}

function FindForeigner(message) {
	P(message);
	socket = io();
	socket.emit('FindForeigner');
}

function Launch_Game() {

	N("Voici votre histoire...");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Clear();
	Start_Scene_1();
}

function WhatIsThisGame(message) {
	gameInfo = true;

	P(message);
	
	N("Ah, eh bien ce jeu est un projet étudiant pour le cours IC06 !");
	N("C'est un cours sur l'industrie et la conception de jeux vidéo.");
	N("Il est enseigné à l'UTC.");
	P("...");
	N("Université de Technologie de Compiègne.");

	P("Et c'est vous qui l'avez fait ?");

	N("Nous sommes les trois scénaristes / programmeurs / artistes de ce jeu.");

	P("Wow ! Vous avez tout fait vous-même ?");

	if (credits) {
		N("Non ! Comme dit dans les crédits, nous avons utilisé beaucoup de ressources en Creative Commons (CC).");
		N("Tu peux retourner les lire si besoin.");
	} else {
		N("Non, pas TOUT !");
		N("De nombreuses inspirations nous viennent du domaine public.");
		N("Toutes nos sources et inspirations sont citées dans les crédits.");
	}

	N("Veux-tu jouer maintenant ?");

	if (credits) {
		Choose({
				"Commencer la partie.": Room,
				"Revoir les crédits" : ShowCredits
			});
	} else {
		Choose({
				"Commencer la partie.": Room,
				"Voir les crédits." : ShowCredits
			});
    }
}

function ShowCredits(message) {
	credits = true;
	P(message);
	Credits();
	if (gameInfo) {
		Choose({
			"Commencer une partie.": Room
		});
	} else {
		Choose({
			"Commencer une partie.": Room,
			"C'est quoi ce jeu ?": WhatIsThisGame
		});
    }
}

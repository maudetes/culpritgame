// SCENE_4 : EPILOGUE

function Start_Scene_4(){
	
	/////// SET UP SCENE ////////
	Clear();
	Show("background","black");
	/////////////////////////////

	// On instancie les variables manquantes afin d'avoir un code général par la suite
	if(player == 1){
		// Scene 2A
		var AnnaYouLiar = otherRecap.AnnaYouLiar;
		var unknownNumber = otherRecap.unknownNumber;
		var AnnaFrankTogether = otherRecap.AnnaFrankTogether;
		var whoCalledThePolice = otherRecap.whoCalledThePolice;
		var AnnaWantsFrankInPrison = otherRecap.AnnaWantsFrankInPrison;
		var AnnaYouHacker = otherRecap.AnnaYouHacker;
		var AnnaArrivedAfterFrank = otherRecap.AnnaArrivedAfterFrank;
		var AnnaKateFriends = otherRecap.AnnaKateFriends;

		// Scene 3A
		var Immunity = otherRecap.Immunity;
		var AnnaNoticedBadCopBluffed = otherRecap.AnnaNoticedBadCopBluffed;
	}
	else {
		// Scene 2F
		var BadCopIsAngry = otherRecap.BadCopIsAngry;
		var FrankYouLiar = otherRecap.FrankYouLiar;
		var FrankWantsAnnaInPrison = otherRecap.FrankWantsAnnaInPrison;
		var FrankHoldUp = otherRecap.FrankHoldUp;

		// Scene 3F
		var AnnaFrankTogether = otherRecap.AnnaFrankTogether;
		var AnnaFrankAgreedAboutRelationship1 = otherRecap.AnnaFrankAgreedAboutRelationship1;
		var AnnaFrankAgreedAboutRelationship2 = otherRecap.AnnaFrankAgreedAboutRelationship2;
		var AnnaKateFriends = otherRecap.AnnaKateFriends;
		var FrankSaidRelionshipWas = otherRecap.FrankSaidRelionshipWas;
		var FrankBlamesBadCop = otherRecap.FrankBlamesBadCop;
		var FrankArrivedAfterAnna = otherRecap.FrankArrivedAfterAnna;
	}

	if( (AnnaYouLiar < 2) && (FrankYouLiar < 2) && (whoCalledThePolice) && (AnnaNoticedBadCopBluffed || FrankBlamesBadCop || unknownNumber) )
		Scene4_GoodEnd();

	else if ( (FrankWantsAnnaInPrison) && ((AnnaYouLiar >= FrankYouLiar ) || AnnaArrivedAfterFrank || !FrankArrivedAfterAnna) )
		Scene4_AnnaGuilty();

	else if ( (AnnaWantsFrankInPrison) && ((AnnaYouLiar <= FrankYouLiar ) || !AnnaArrivedAfterFrank || FrankArrivedAfterAnna) ) 
		Scene4_FrankGuilty();

	else
		Scene4_BadEnd();

}


function Scene4_GoodEnd(){

	PlaySound("bg","happy_end",{loop:-1, volume:0.7});

	N("Suite aux interrogatoires, personne ne pouvait être jugé coupable.");

	if(player == 1)
		N("Effectivement, votre version des faits et celle d'Anna Collins vous prouvaient innocents tout les deux.");
	else
		N("Effectivement, votre version des faits et celle de Frank Prescott vous prouvaient innocents tout les deux.");


	N("De plus, aucune preuve trouvée sur la scène de crime ne vous incriminait.");
	N("De ce fait, l'inspecteur Hackins pensa qu'il fallait mieux attendre les analyses scientifiques pour conclure quoique ce soit.");

	N("Cette décision n'enchenta guère Mr Carter qui devenait de plus en plus anxieux.");
	N("Ceci n'était pas totalement étrange, car c'était lui qui avait tué Kate.");

	N("Les preuves l'incriminant tombaient les unes après les autres.");
	N("Il fut donc convié dans une salle d'interrogatoire, non pas en tant qu'inspecteur, mais en tant que coupable.");

	N("Accumulant le stress depuis le début, il ne put s'empêcher d'avouer le meurtre.");

	if(player == 1){
		N("Il expliqua que pour lui, vous étiez une vrai plaie, et qu'il fallait vous éradiquer du monde public.");
		N("Pour y arriver, il voulut mettre la pression sur Kate, votre femme.");
	}
	else{
		N("Il expliqua que pour lui, Frank était une vrai plaie, et qu'il fallait l'éradiquer du monde public.");
		N("Pour y arriver, il voulut mettre la pression sur Kate, la femme de Frank.");
	}

	N("Cependant, la discussion tourna mal et cette dernière braqua son arme en signe de défense.");

	N("Par réflexe, Jerry essaya de prendre l'arme des main de Kate.");

	N("1");
	PlaySound("sfx", "single_gun_shot");
	Wait(1000);
	N("2");
	PlaySound("sfx", "single_gun_shot");
	Wait(1000);
	N("3 coups de feu partirent.");
	PlaySound("sfx", "single_gun_shot");
	Wait(2000);
	Wait(1000);

	N("Enlevant la vie de Kate.");


	// changement d'ambiance : faut-il changer la musqiue ?
	if(player == 1)
		N("Vous vous trouvez à l'extérieur du poste de police accompagné d'Anna Collins et de M. Hawkins.");
	else
		N("Vous vous trouvez à l'extérieur du poste de police accompagné de Frank Prescott et de M. Hawkins.");
	
	N("Vous voyez plus loin Jerry Carter en train de se faire embarquer dans une voiture, direction le couloir de la mort.");
	N("Mr Hawkins vous explique qu'ayant trouvé le vrai coupable, vous êtes libre.");

	Wait(8000);

	End_Scene_4();
}

function Scene4_FrankGuilty(){

	PlaySound("bg","culprit_end",{loop:-1, volume:0.7});

	N("A la fin des interrogatoires, " + ( player == 1 ? "vous avez" : "Frank a") + " été jugé coupable.");
	N("Tandis que pour " + ( player == 1 ? "Anna" : "vous") + ", le jugement a été beaucoup plus clément : la liberté.");

	N("Ceci n'est en réalité pas très étonnant.");

	if(player == 1){
		N("Anna avait tenté de vous incriminer en racontant que vous êtiez le responsable de cette sale affaire.");
		N("Malgré le fait que cela ressemble à de la désignation gratuite, Anna a été plus convaincante que vous.");
	}
	else {
		N("Vous aviez tenté d'incriminer ce dernier en racontant qu'il était le responsable de cette sale affaire.");
		N("Malgré le fait que cela ressemble à de la désignation gratuite, vous avez été plus convaincante que Frank.");
	}

	N("Ce qui amena à cette décision.");


	// Changment d'ambiance

	N("Vous et " + (player == 1 ? "Anna" : "Frank") + " sortez tout les deux du poste de police.");
	N("A une différence près : " + (player == 1 ? "vous êtes" : "Frank est") + " entouré de policiers.");

	N("Une fois dehors, vous voyez une voiture au loin, celle qui " 
		+ (player == 1 ? "vous emmenera" : "emmenera Frank") + " au couloir de la mort.");

	if(player == 1){
		N("Arrivé devant la voiture, vous vous retournez.");
		N("Vous échangez un regard rempli de haine avec Anna.");
		N("Vous remarquez alors que les inspecteurs Carter et Hawkins sont sortis pour voir le déroulement de l'opération.");
		N("Vous voyez aussi que M. Carter vous regarde avec un regard vicieux et satisfait.");
		
		Wait(1000);
		PlaySound("sfx", "car_door_and_engine_start");
		Wait(4000);
	}
	else {
		N("Arrivé devant la voiture, Frank se retourne avec un regard empli de haine.");
		N("Vous lui rendez son regard avant qu'il ne parte.");
		N("Vous entendez alors les inspecteurs Carter et Hawkins parler.");
		N("Ces derniers viennent vous voir pour vous expliquer que vous êtes désormais libre, contrairement à Frank.");
	}

	N("Pensez-vous avoir fait les bons choix ?");

	Wait(8000);

	End_Scene_4();
}

function Scene4_AnnaGuilty(){

	PlaySound("bg","culprit_end",{loop:-1, volume:0.7});

	N("A la fin des interogatoires, " + ( player == 2 ? "vous avez" : "Anna a") + " été jugé coupable.");
	N("Tandis que pour " + ( player == 2 ? "Frank" : "vous") + ", le jugement a été beaucoup plus clément : la liberté.");

	N("Ceci n'est en réalité pas très étonnant.");

	if(player == 2){
		N("Frank avait tenté de vous incriminer en racontant que vous êtiez la responsable de cette sale affaire.");
		N("Malgré le fait que cela ressemble à de la désignation gratuite, Frank a été plus convaincant que vous.");
	}
	else {
		N("Vous aviez tenté d'incriminer ce dernier en racontant qu'il était le responsable de cette sale affaire.");
		N("Malgré le fait que cela ressemble à de la désignation gratuite, vous avez été plus convaincante que Frank.");
	}

	N("Ce qui amena à cette décision.");


	// Changment d'ambiance

	N("Vous et " + (player == 1 ? "Anna" : "Frank") + " sortez tout les deux du poste de police.");
	N("A une différence près : " + (player == 2 ? "vous êtes" : "Anna est") + " entouré de policier.");

	N("Une fois dehors, vous voyez une voiture au loin, celle qui " 
		+ (player == 2 ? "vous emmenera" : "emmenera Anna") + " au couloir de la mort.");

	if(player == 2){
		N("Arrivée devant la voiture, vous vous retounez.");
		N("Vous échangez un regard rempli de haine avec Frank.");
		N("Vous remarquez alors que les inspecteurs Carter et Hawkins sont sortis pour voir le déroulement de l'opération.");
		N("Vous voyez aussi que Mr Carter reagrde Frank de travers, comme si les choses ne c'étaient pas passées comme prévu.");
		
		Wait(1000);
		PlaySound("sfx", "car_door_and_engine_start");
		Wait(4000);
	}
	else {
		N("Arrivée devant la voiture, Anna se retourne avec un regard empli de haine.");
		N("Vous lui rendez son regard avant qu'elle ne parte.");
		N("Vous entendez alors les inspecteurs Carter et Hawkins parler.");
		N("M. Hawkins vient vous voir pour vous expliquer que vous êtes désormais libre, contraiement à Anna.");
	}

	N("Pensez-vous avoir fait les bons choix ?");

	Wait(8000);

	End_Scene_4();
}

function Scene4_BadEnd(){

	PlaySound("bg","bad_end",{loop:-1, volume:0.7});

	if(player == 1)
		N("Suite aux interrogatoires, vous et Anna n'avez pas vraiment convaincu les inspecteurs.");
	else
		N("Suite aux interrogatoires, vous et Frank n'avez pas vraiment convaincu les inspecteurs.");

	var link = "";
	var link2 = "V";

	if(!AnnaFrankAgreedAboutRelationship2 || !AnnaFrankAgreedAboutRelationship1){
		N("Vous avez notamment donné des versions différentes des faits.");
		link = "De plus, ";
	}

	if( (AnnaYouLiar >= 2 && FrankYouLiar < 2) || (AnnaYouLiar < 2 && FrankYouLiar >= 2) ){
		N(link + "l'un de vous deux a menti.");
		link2 = "Et v";
	}


	else if ( AnnaYouLiar >= 2 && FrankYouLiar >= 2 ){
		N(link + "vous avez tout les deux menti.");
		link2 = "Et v";
	}

	if( FrankWantsAnnaInPrison && AnnaWantsFrankInPrison )
		N(link2 + "ous êtes mutuellement accusés.");



	N("Tout ceci mena les inspecteurs à ne pas vous croire.");

	N("N'ayant quasiment aucune preuve pour vous inculper, les inspecteurs ne pouvaient pas vous condamner à mort.");

	N("Cependant, suite à vos multiples erreurs et à votre présence sur le lieu du crime, \
	les inspecteurs vous ont tous les deux condamnés à croupir en prison pendant plusieurs années.");



	if(player == 1)
		N("Anna et vous sortez du poste de police, direction la voiture qui vous emmenera en prison.");
	else 
		N("Frank et vous sortez du poste de police, direction la voiture qui vous emmenera en prison.");

	N("Vous vous retournez afin de regarder derrière vous.");

	N("Vous voyez Mr Hawkins vous regardant avec un regard dur.");


	if(player == 1)
		N("Vous voyez aussi Mr Carter vous regardant avec un regard vicieux et satisfait.");
	else
		N("Vous voyez aussi Mr Carter regardant Frank avec un regard vicieux et satisfait.");

	Wait(1000);
	PlaySound("sfx", "car_door_and_engine_start");
	Wait(4000);

	N("Pensez-vous avoir fait les bons choix ?");

	Wait(8000);

	End_Scene_4();
}


function End_Scene_4(){
	Choose({
		"Voir les crédits." : function(){P("Voir les crédits"); Credits();},
		"Recommencer." : function(){location.reload();},
	});
}
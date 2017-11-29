// SCENE_4 : EPILOGUE

function Start_Scene_4(){
	
	/////// SET UP SCENE ////////
	Clear();
	Show("background","black");
	/////////////////////////////

	// On instancie les varaibles manquantes afin d'avoir un code général par la suite
	if(player == 1){
		AnnaYouLiar = otherRecap.AnnaYouLiar;
		unknownNumber = otherRecap.unknownNumber;
		AnnaFrankTogether = otherRecap.AnnaFrankTogether;
		whoCalledThePolice = otherRecap.whoCalledThePolice;
		AnnaWantsFrankInPrison = otherRecap.AnnaWantsFrankInPrison;
		AnnaYouHacker = otherRecap.AnnaYouHacker;
		AnnaArrivedAfterFrank = otherRecap.AnnaArrivedAfterFrank;
		AnnaKateFriends = otherRecap.AnnaKateFriends;

		Immunity = otherRecap.Immunity;
		AnnaNoticedBadCopBluffed = otherRecap.AnnaNoticedBadCopBluffed;
	}
	else {
		BadCopIsAngry = otherRecap.BadCopIsAngry;
		FrankYouLiar = otherRecap.FrankYouLiar;
		FrankWantsAnnaInPrison = otherRecap.FrankWantsAnnaInPrison;
		FrankHoldUp = otherRecap.FrankHoldUp;

		AnnaFrankTogether = otherRecap.AnnaFrankTogether;
		AnnaFrankAgreedAboutRelationship1 = otherRecap.AnnaFrankAgreedAboutRelationship1;
		AnnaFrankAgreedAboutRelationship2 = otherRecap.AnnaFrankAgreedAboutRelationship2;
		AnnaKateFriends = otherRecap.AnnaKateFriends;
		FrankSaidRelionshipWas = otherRecap.FrankSaidRelionshipWas;
		FrankBlamesBadCop = otherRecap.FrankBlamesBadCop;
	}

}


function Scene4_GoodEnd(){
	N("Suite aux interrogatoires, personne ne pouvait être jugé coupable.");

	if(player == 1)
		N("Effectivement, votre version des fait et celle d'Anna Collins vous prouvaient innocents tout les deux.");
	else
		N("Effectivement, votre version des fait et celle de Frank Prescott vous prouvaient innocents tout les deux.");


	N("De plus, aucune preuve trouvée sur la scène de crime ne vous incriminiez.");
	N("De ce fait, l'inspecteur Hackins pensa qu'il fallait mieux attendre les analyses des scientifiques pour conclure quoique ce soit");

	N("Cette décision n'enchenta guère Mr Carter qui devenait de plus en plus anxieux");
	N("Ceci n'était pas totalement étrange, car c'était lui qui avait tué Kate.");

	N("Les preuves l'incriminant tombaient les unes après les autres.");
	N("Il fut donc invité dans une salle d'interrogatoire, non pas en tant qu'inspecteur, mais en tant que coupable.");

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
	N("2");
	N("3 coups de feu partirent.");

	N("Enlevant la vie de Kate.");

	if(player == 1)
		N("Vous vous trouvez à l'extérieur du poste de police accompagné d'Anna Collins et M. Hawkins.");
	else
		N("Vous vous trouvez à l'extérieur du poste de police accompagné de Frank Prescott et M. Hawkins.");
	
	N("Vous voyez plus loin Jerry Carter en train de se faire embarqué dans une voiture, direction le couloir de la mort.");
	N("Mr Hawkins vous explique qu'ayant trouver le vrai coupable, vous êtes libre.");

	End_Scene_4();
}

function Scene4_BadEnd(){

}


function End_Scene_4(){
	Clear();
}
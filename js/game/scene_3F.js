// SCENE_3 : CONTINUATION OF THE QUESTIONNING FOR FRANK

// Common vars
var AnnaFrankTogether = false;
var AnnaFrankAgreedAboutRelationship1 = false;
var AnnaFrankAgreedAboutRelationship2 = false;
var AnnaKateFriends = false;
var FrankSaidRelionshipWas;
var FrankBlamesBadCop = false;
var FrankArrivedAfterAnna = false;

function Start_Scene_3F(){
	
	ready = false;

	/////// SET UP SCENE ////////
	Clear();
	Show("background","scene_3_male");
	/////////////////////////////

	I("Bonjour, je suis l'interrogateur Hawkins.");	
	I("Excusez mon collègue pour son attitude.");
	I("Vous commencez à le connaître, il a tendance à s'emporter rapidement...");
	I("C'est moi qui vais mener la fin de cet interrogatoire.");

	F("Pas de souci, j'ai l'habitude...");

	I("On va tout reprendre depuis le début.");

	F("...");

	I("Quelle est votre relation avec Anna Collins ?");

	Choose({
		"On est amants." : Scene_3F_Part2,
		"Juste une vague connaissance." : Scene_3F_Part2,
		"C'est juste une collègue." : Scene_3F_Part2
	});
}

function Scene_3F_Part2(message){
	FrankSaidRelionshipWas = message;

	F(message);

	if((otherRecap.AnnaFrankTogether == true && FrankSaidRelionshipWas != "On est amants.")
		|| (otherRecap.AnnaFrankTogether == false && FrankSaidRelionshipWas == "On est amants.")){
		AnnaFrankAgreedAboutRelationship1 = false;

		I("Etrange...");
		I("C'est pas ce que madame Collins m'a raconté.");
		I("...");
		PlaySound("sfx", "sigh");
		Wait(3000);
		
		I("A ce rythme là, si vos versions divergent trop vous serez tous les deux jugés coupables.");
		I("Mais c'est peut être elle qui ment...");
		I("Je ne peux pas encore délier le vrai du faux.");
		I("Je me ferai une idée par rapport à ce que vous me direz par la suite.");
	}
	else{
		AnnaFrankAgreedAboutRelationship1 = true;

		I("C'est ce qu'elle m'a dit, oui.");
	}
	Scene_3F_Part3();

}

function Scene_3F_Part3(){
	I("D'ailleurs...");
	I("Pouvez-vous me dire quelle était la relation entre votre femme et Anna ?");

	Choose({
		"Qu'est-ce qu'on en a à faire ?!" : Scene_3F_WhyDoesItMatter,
		"Elles étaient amies." : Scene_3F_Part4,
		"Elles ne se connaissaient pas personnellement." : Scene_3F_Part4
	});
}

function Scene_3F_WhyDoesItMatter(message){
	F(message);

	I("...");
	PlaySound("sfx", "sigh");
	Wait(3000);

	I("Anna a été retrouvée sur le lieu de meurtre de votre femme.");
	I("J'essaye de retracer le plus précisement la situation afin d'élucider toute l'histoire.");
	I("Donc, je recommence.");
	I("Quelle était la relation entre votre femme et Anna ?");

	Choose({
		"Elles étaient amies." : Scene_3F_Part4,
		"Elles ne se connaissaient pas personnellement." : Scene_3F_Part4
	});
}

function Scene_3F_Part4(message){
	F(message);

	if(message === "Elles étaient amies."){
		AnnaKateFriends = true;
	}

	if(otherRecap.AnnaKateFriends != AnnaKateFriends){
		AnnaFrankAgreedAboutRelationship2 = false;
		if(AnnaFrankAgreedAboutRelationship1){
			I("Etrange...");
			I("C'est pas ce que Madame Collins m'a raconté.");
			I("Je vous laisse le bénéfice du doute.");
		}
		else{
			I("Encore une fois, vos versions ne concordent pas.");
			I("Cela ne va pas nous aider à trouver le meurtrier.");
			I("A croire que l'un de vous deux n'a vraiment pas envie qu'on enquête sérieusement.");

			F("Moi je vous dis ce que je sais. Vous me croyez ou non.");
		}
	}
	else{
		AnnaFrankAgreedAboutRelationship2 = true;

		I("Très bien, c'est noté.");
	}
	Scene_3F_Part5();
}

function Scene_3F_Part5(){
	I("Continuous.");

	F("Est-ce que vous n'êtes pas sensé me demander qui aurait pu en vouloir à ma femme ?");

	I("C'est pas à vous de poser les questions.");
	I("Mais celle-ci est plutôt pertienente.");
	I("Vous pensiez à quelqu'un en particulier ?");

	Choose({
		"Elle n'avait pas d'ennemi. Mais j'imagine que vous savez bien que ce n'est pas mon cas." : Scene_3F_FrankBlamesHisEnnemies,
		"Anna." : Scene_3F_FrankBlamesAnna,
		"Non. C'était juste pour vous apprendre à faire votre boulot." : Scene_3F_FrankBlamesNoOne 
	});
}

function Scene_3F_FrankBlamesNoOne(message){
	F(message);

	I("Je vois que monsieur est joueur.");
	I("On verra quelle attitude t'auras une fois jugé.");

	Scene_3F_Part5();
}
function Scene_3F_FrankBlamesHisEnnemies(message){
	F(message);
	F("On a sûrement chercher à m'atteindre à travers elle.");

	I("Pourquoi ?");

	Choose({
		"Pour m'envoyer en prison." : Scene_3F_FrankBlamesHisEnnemiesPart2,
		"Pour me faire tomber et prendre ma place." : Scene_3F_FrankBlamesHisEnnemiesPart2,
		"Par vengeance, peut-être ?" : Scene_3F_FrankBlamesHisEnnemiesPart2
	});
}

function Scene_3F_FrankBlamesHisEnnemiesPart2(message){
	F(message);

	I("Avez-vous des noms ?");

	if(BadCopIsAngry >= 2){
		Choose({
			"M. Putito, chef du gang Cosa Nostra." : Scene_3F_FrankBlamesHisEnnemiesPart3,
			"Il y a plus d'une personne à avoir une dent contre moi dans cette ville." : Scene_3F_FrankBlamesHisEnnemiesPart3,
			"Anna Collins." : Scene_3F_FrankBlamesHisEnnemiesPart3
		});
	}
	else{
		Choose({
			"L'autre inspecteur, Monsieur MachinChose." : Scene_3F_FrankBlamesBadCop,
			"Il y a plus d'une personne à avoir une dent contre moi dans cette ville." : Scene_3F_FrankBlamesHisEnnemiesPart3,
			"Anna Collins." : Scene_3F_FrankBlamesHisEnnemiesPart3
		});
	}
}

function Scene_3F_FrankBlamesHisEnnemiesPart3(message){
	F(message);

	//TODO: add vars about whom was blamed by Frank
	if(message === "Anna Collins."){
		FrankWantsAnnaInPrison ++;
		//var Anna
	}
	F("Je vous conseille vraiment d'aller regarder de ce côté là.");

	I("C'est noté");

	Scene_3F_Part5();
}

function Scene_3F_FrankBlamesBadCop(message){
	FrankBlamesBadCop = true;

	F(message);

	I("Pardon ?!");

	F("Il avait l'air d'être la personne qui voulait le plus me voir en prison.");
	F("Il m'a même menacé.");

	I("...");
	I("C'est noté");

	Scene_3F_Part5();
}

function Scene_3F_FrankBlamesAnna(message){
	FrankWantsAnnaInPrison ++;

	F(message);

	I("Pourquoi ?");

	if(AnnaFrankTogether){
		F("Par jalousie, c'est sûr !");
	}
	else if(AnnaKateFriends){
		F("Il y avait des tensions importantes entre les deux récemment.");
	}
	else{
		F("Je ne sais pas encore.");

		I("Ca me semble être une accusation grauite !");
	}

	I("Pourquoi vous croirai-je ?");

	if(AnnaFrankAgreedAboutRelationship1 && AnnaFrankAgreedAboutRelationship2){
		F("Parce que c'est ma femme qui est morte !");
		F("Ce n'est pas moi qui l'ai tuée.");
		F("Et la seule autre personne sur la scène du crime, c'était Anna.");
	}
	else{
		F("Moi je vous dis la vérité et elle vous ment.");
		F("Evidemment qu'elle paraît suspecte.");
		F("Elle a forcément quelque chose à cacher.");
	}
	Scene_3F_Part5();
}

function Scene_3F_Part5(){
	I("OK.");
	I("On va pouvoir continuer l'interrogatoire dans l'ordre, si vous voulez bien.");

	F("...");

	I("A quelle heure êtes-vous arrivé sur les lieux du crime.");

	Choose({
		"Aux alentours de 19h." : Scene_3F_Around19h,
		"Un peu après 21h30." : Scene_3F_After21h30,
		"Après Anna, c'est sûr." : Scene_3F_AfterAnna 
	});
}

function Scene_3F_Around19h(message){
	F(message);

	I("Juste avant d'être interpellé par la police donc.");

	F("Oui, ils sont arrivés juste après.");

	if(otherRecap.whoCalledThePolice){
		I("Anna a mentionné quelque chose de similaire en effet.");
		I("On n'a pas encore réussi à trouver qui à appeler la police.");
	}
	else{
		I("Ok.");
	}
	Scene_3F_Part6();
}

function Scene_3F_After21h30(message){
	F(message);

	I("...");
	PlaySound("sfx", "sigh");
	Wait(3000);

	I("Vous vous rendez compte qu'il n'est que 21h15 ?");

	F("...");

	I("Vous ne vous aidez pas en mentant.");

	Scene_3F_Part6();
}

function Scene_3F_AfterAnna(message){
	F(message);

	FrankArrivedAfterAnna = true;

	if(otherRecap.AnnaArrivedAfterFrank){ 
		I("Amusant.");
		I("Anna a dit le contraire.");

	}
	else if(FrankWantsAnnaInPrison >= 2){
		I("Vous voulez vraiment qu'Anna aille en prison, non ?");

		F("Je vous dis juste la vérité.");
	}
	else{
		I("Hum.");
		I("C'est noté.");
	}
	Scene_3F_Part6();
}

//TODO: add questions about balistic results

function Scene_3F_Part6(){
	I("Bon.");
	I("Je n'ai pas d'autres questions pour le moment.");
	I("Merci pour toutes ces informations");
	if(FrankBlamesBadCop){
		I("Je vais enquêter du côté de Jerry Carter.");
	}
	else{
		I("On va en discuter avec mon collègue.");
		I("Nous vous rendrons notre verdict juste après.");
	}

	Wait(3000);
	PlaySound("sfx", "opening_door");
	Wait(3000);
	Clear();
	PlaySound("sfx", "closing_door");
	Wait(4000);
	Show("background","scene_3_male_inspector_gone");
	PlaySound("sfx", "heartbeat");
	Wait(8000);

	End_Scene_3F();
}

function End_Scene_3F(){
	var recap = { 
		// var scene 2F 
		'BadCopIsAngry' : BadCopIsAngry,
		'FrankYouLiar' : FrankYouLiar,
		'FrankWantsAnnaInPrison' : FrankWantsAnnaInPrison,
		'FrankHoldUp' : FrankHoldUp,
		// var scene 3F
		'AnnaFrankTogether' : AnnaFrankTogether,
		'AnnaFrankAgreedAboutRelationship1' : AnnaFrankAgreedAboutRelationship1,
		'AnnaFrankAgreedAboutRelationship2' : AnnaFrankAgreedAboutRelationship2,
		'AnnaKateFriends' : AnnaKateFriends,
		'FrankSaidRelionshipWas' : FrankSaidRelionshipWas,
		'FrankBlamesBadCop' : FrankBlamesBadCop	
	};


	sendRecap(recap);

	console.log(recap);

	Clear();

	//ne commencer la scene 4 que si ready (par rapport à l'autre joueur)
	if(ready){
		Start_Scene_4();
	} else {
		ready = true;
		N("Les inspecteurs s'échangent leurs informations.");
	}
}
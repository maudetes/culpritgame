// SCENE_2 : BEGINNING OF THE QUESTIONNING

// Common vars
var FrankYouLiar = 0;

function Start_Scene_2F(){

	/////// SET UP SCENE ////////
	Clear();
	
	Show("background","interrogation_room_male");
	/////////////////////////////

	I("Bonjour Franck.");
	I("J'espère que je t'ai pas manqué depuis le temps ?");

	Choose({
		"Non, moins on se voit, mieux on se porte." : Scene_2F_DontMissYou,
		"On se connaît ?" : Scene_2F_DoWeKnowEachOther,
		"Ca ne fait pas si longtemps que l'on s'est vu." : Scene_2F_NotLongTime
	});
}

function Scene_2F_DontMissYou(message){
	F(message);

	I("C'est pas faux.");

	Scene_2F_Part2()
}

function Scene_2F_DoWeKnowEachOther(message){
	F(message);
	
	I("Hahaha !");
	I("Je vois que tu fais toujours ton malin.");
	I("T'es tellement connue des services que ton heure proche.");

	Scene_2F_Part2()
}

function Scene_2F_NotLongTime(message){
	F(message);
	
	I("Je vois que tu perds pas le Nord.");

	Scene_2F_Part2()
}

function Scene_2F_Part2(){

	I("Enfin, bref.");
	I("Tu connais bien le procédure, mais la loi m'oblige de te le rappeler.").
	I("A la fin de cet interrogatoire, justice sera faite.");

	I("Pourquoi étais-tu sur le lieu du crime ?");

	Choose({
		"J'ai reçu un SMS de ma femme." : Scene_2F_Sms,
		"Je rentrais juste de mon travail." : Scene_2F_ComeBackHome,
		"Je suis venu mettre les choses au clair avec Kate." : Scene_2F_ClarifyingKate
	});

}

function Scene_2F_Sms (message){
	F(message);

	F("Elle voulait que je rentre rapidement à la maison.");

	I("Pour quel raison ?");

	Scene_2F_ImportantChoice();
}

function Scene_2F_ComeBackHome (message){
	F(message);
	F("Est-ce un crime de rentrer chez soi ?");

	I("Pour tuer une personne, oui.");

	I("Pourtant, il me semble que t'as reçu SMS accusateur ?");

	F("...");

	FrankYouLiar++;

	I("T'avais un problème avec ta femme, non ?")


	Scene_2F_ImportantChoice();
}

function Scene_2F_ClarifyingKate (message){
	F(message);

	I("A propos de quoi ?");

	Scene_2F_ImportantChoice();
}

function Scene_2F_ImportantChoice(){
	Choose({
		"Elle pensait que j'étais infidèle" : Scene_2F_Unfaithful,
		"Elle avait l'air énervé contre Anna" : Scene_2F_AngryAnna,
		"Elle était au courrant que j'entretenais une relation avec Anna" : Scene_2F_AFTogether
	});
}

function Scene_2F_Unfaithful(message){
	F(message);

}

function Scene_2F_AngryAnna(message){
	F(message);

}

function Scene_2F_AFTogether(message){
	F(message);

}
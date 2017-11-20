// SCENE_2 : BEGINNING OF THE QUESTIONNING

// Common vars
var FrankYouLiar = 0;
var FrankWantsAnnaInPrison = false;
var FrankHoldUp = false;

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

	I("Avec ta complice ?");

	Choose({
		"Je vois pas de qui tu parles ..." : Scene_2F_DontSee,
		"Complice ? J'y suis pour rien moi." : Scene_2F_FrankInnocent,
		"Comment un minable comme toi aurait trouvé un lien avec le braquage ?" : Scene_2F_HoldUp
	});
}

function Scene_2F_AngryAnna(message){
	F(message);

	I("C'est pour ça que t'as tué Kate ?");

	F("Nan, c'est pour ça qu'Anna l'a tué.");
	FrankWantsAnnaInPrison = true;

}

function Scene_2F_AFTogether(message){
	F(message);

	I("Un crime passionnel, donc.");
	I("Intéressant ...");

	Choose({
		"Hey, un désaccord n'implique pas un crime." : Scene_2F_NoCrime,
		"C'est vrai qu'entre Anna et Kate, je ne sais pas laquelle était la plus jalouse." : Scene_2F_Jealous,
		"Tu vas trop vite dans tes réflexions mon p'tit gars." : Scene_2F_TooFast
	});
}

function Scene_2F_DontSee(){
	F(message);

	I("Mais oui, bien sûr, joue celui qui ne sait rien.");
	I("..."); // TODO : I soufle / expire fortement
	I("Tu sais bien que je parles d'Anna Collins");
	I("D'ailleurs, elle est actuellement en train d'être interrogée par mon collègue.");
	I("Donc, si j'étais toi, je ne ferai pas trop le malin.");
	I("Si vos 2 versions ne concordent pas, tu vas y passer.");


}

function Scene_2F_FrankInnocent(){
	F(message);
	
	I("Qui est le coupable alors ?");

	F("Ton coupab-- ...");
	F("Non.");
	F("TA coupable est dans la salle d'à coté.");
	FrankWantsAnnaInPrison = true;

}

function Scene_2F_HoldUp(){
	F(message);
	
	I("Il semblerait que ça ne soit pas moi le minable ici.");
	I("Au début, j'étais pas venu pour parler de cela.");
	I("Mais bon, j'en prends note, ça peut toujours être utile");
	FrankHoldUp = true;

	F("...");
}

function Scene_2F_NoCrime(){
	F(message);
	
	I("Je ne fais qu'énoncer les possibili--");

	F("T'essayes surtout de m'accuser à tort et sans preuves.");
	F("Tu perds ton temps avec moi.");
}

function Scene_2F_Jealous(){
	F(message);

	I("Donc, pour toi, elle se seraient disputées ?");

	F("C'est fort probable");
	FrankWantsAnnaInPrison = true;
}

function Scene_2F_TooFast(){
	F("Hey, mollo tu veux bien ?");
	F(message);
	
	I("Comment ose-tu me traiter de la sorte ?");
}

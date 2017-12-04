// SCENE_2 : BEGINNING OF THE QUESTIONNING FOR FRANK

// Common vars
var FrankYouLiar = 0;
var FrankWantsAnnaInPrison = false;
var FrankHoldUp = false;
var BadCopIsAngry = 0;

function Start_Scene_2F(){

	/////// SET UP SCENE ////////
	Clear();
	
	Show("background","scene_2_male");
	/////////////////////////////

	I("Bonjour Frank.");
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
	I("T'es tellement connu des services, tu vas finir par plonger.");

	Scene_2F_Part2()
}

function Scene_2F_NotLongTime(message){
	F(message);
	
	I("Je vois que tu perds pas le Nord.");

	Scene_2F_Part2()
}

function Scene_2F_Part2(){

	I("Enfin, bref.");
	I("Tu connais bien la procédure, mais la loi m'oblige à te la rappeler.");
	I("Tu es l'un des principaux suspects dans le meurtre de ta femme, Kate Stillwell.");
	I("Tout ce que tu diras pourra être retenu contre toi.");
	I("A la fin de cet interrogatoire, justice sera faite.");

	I("Pourquoi étais-tu sur le lieu du crime ?");

	Choose({
		"J'ai reçu un SMS de ma femme." : Scene_2F_Sms,
		"Je rentrais juste de mon travail." : Scene_2F_ComeBackHome,
		"J'étais venu mettre les choses au clair avec ma femme." : Scene_2F_ClarifyingKate
	});

}

function Scene_2F_Sms (message){
	F(message);

	F("Elle voulait que je rentre rapidement à la maison.");

	I("Pour quelle raison ?");

	Scene_2F_ImportantChoice();
}

function Scene_2F_ComeBackHome (message){
	F(message);
	F("Est-ce un crime de rentrer chez soi ?");

	I("Pour tuer une personne, oui.");

	I("Pourtant, il me semble que t'as reçu SMS accusateur ?");

	F("...");
	PlaySound("sfx", "heartbeat");
	Wait(4000);

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
		"Elle pensait que j'étais infidèle." : Scene_2F_Unfaithful,
		"Elle avait l'air énervée contre Anna." : Scene_2F_AngryAnna,
		"Elle était au courant que j'entretenais une relation avec Anna." : Scene_2F_AFTogether
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

	Scene_2F_FrankRatsOut();
}

function Scene_2F_AFTogether(message){
	F(message);

	I("Un crime passionnel, donc.");
	I("Intéressant...");

	Choose({
		"Hey, un désaccord n'implique pas un crime." : Scene_2F_NoCrime,
		"C'est vrai qu'entre Anna et Kate, je ne sais pas laquelle était la plus jalouse." : Scene_2F_Jealous,
		"Tu vas trop vite dans tes réflexions mon p'tit gars." : Scene_2F_TooFast
	});
}

function Scene_2F_DontSee(message){
	F(message);

	I("Mais oui, bien sûr, joue celui qui ne sait rien.");
	I("...");
	PlaySound("sfx", "sigh");
	Wait(3000);
	I("Tu sais bien que je parles d'Anna Collins.");
	I("D'ailleurs, elle est actuellement en train d'être interrogée par mon collègue.");
	I("Donc, si j'étais toi, je ne ferai pas trop le malin.");
	I("Si vos 2 versions ne concordent pas, tu vas y passer.");

	Scene_2F_BadCopIsLosingHisShit();
}

function Scene_2F_FrankInnocent(message){
	F(message);
	
	I("Qui est le coupable alors ?");

	F("Ton coupab-- ...");
	F("Non.");
	F("TA coupable est dans la salle d'à coté.");
	FrankWantsAnnaInPrison = true;

	Scene_2F_FrankRatsOut();
}

function Scene_2F_HoldUp(message){
	F(message);
	
	I("Il semblerait que ça ne soit pas moi le minable ici.");
	I("Au début, j'étais pas venu pour parler de cela.");
	I("Mais bon, j'en prends note, ça peut toujours être utile...");
	FrankHoldUp = true;

	F("...");

	Scene_2F_BadCopIsHappy();
}

function Scene_2F_NoCrime(message){
	F(message);
	
	I("Je ne fais qu'énoncer les possibili--");

	F("T'essayes surtout de m'accuser à tort et sans preuves.");
	F("Tu perds ton temps avec moi.");

	Scene_2F_BadCopIsLosingHisShit();
}

function Scene_2F_Jealous(message){
	F(message);

	I("Donc, pour toi, elle se seraient disputées ?");

	F("C'est fort probable.");
	FrankWantsAnnaInPrison = true;

	Scene_2F_FrankRatsOut();
}

function Scene_2F_TooFast(message){
	F("Hey, mollo tu veux bien ?");
	F(message);
	
	I("Comment ose-tu me traiter de la sorte ?");

	Scene_2F_BadCopIsLosingHisShit();
}

function Scene_2F_BadCopIsLosingHisShit(){

	F("Tu n'as aucune preuve. Rien.");
	F("Alors arrête ton cinéma, gamin.");

	I("Gamin ?!");
	I("Redis ça une seule fois, et... !");
	PlaySound("sfx", "fist_on_table");
	Wait(3000);

	PlaySound("sfx", "heartbeat");
	Wait(3000);

	F("... Et quoi ?");

	I("Essaye et tu verras !");

	F("...");

	BadCopIsAngry++;

	Scene_2F_Part3();
}

function Scene_2F_FrankRatsOut(){
	I("J'aurais pas cru que tu m'aurais aidé gentiment comme ça.");

	F("Qu'on se mette d'accord, si je balance ma collègue, je suis libre.");

	I("Je ne crois pas que tu sois en position de négocier quoi que ce soit.");
	I("Si tu t'en sors avec la tête sur les épaules, tu pourras déjà t'estimer heureux.");

	F("Pardon ?");
	F("Tu n'as aucune preuve. Rien.");

	I("Je te permets pas d'être condescendant avec moi.");
	I("C'est moi qui ait le pouvoir ici, alors fais pas le malin.");

	Scene_2F_Part3();

}

function Scene_2F_BadCopIsHappy(){
	I("J'aurais pas cru que tu m'aurais aidé gentiment comme ça.");
	I("J'ai même pas eu besoin de faire monter la pression pour que tu te mettes à table.");
	I("Frank Prescott n'est plus la légende qu'il était, si ?");

	F("Je te conseille d'arrêter de me parler comme ça, gamin.")
	F("Tu n'as aucune preuve. Rien.");

	I("Je te permets pas d'être condescendant avec moi.");
	I("C'est moi qui ait le pouvoir ici, alors fais pas le malin.");

	Scene_2F_Part3();
}

function Scene_2F_Part3(){
	I("Tu ferais mieux de coopérer maintenant.");

	F("On va voir ça.");
	
	I("Je crois que tu ne réalises pas.");
	I("C'est la peine capitale que tu risques.");

	Choose({
		"Sur quelles preuves ?" : Scene_2F_NoProof,
		"Et la justice dans ce pays ?" : Scene_2F_NoJustice,
		"C'est bon, j'ai dit que je coopérais." : Scene_2F_FrankCooperates
	});
}

function Scene_2F_NoProof(message){
	F(message);
	F("On sait tous les deux que t'en n'as pas assez pour ça.");

	I("Parce que te retrouver sur le lieu du meurtre de ta femme, ce n'est pas une preuve ?");
	I("D'autant plus vu le contexte tendu avec elle.");

	F("Non, ce n'en est pas une, et tu le sais bien.");
	F("Mais je ne te donnerai rien.");

	BadCopIsAngry++;

	I("Je trouverai bien.");

	Scene_2F_FrankTeachesBadCopHisJob();
}

function Scene_2F_NoJustice(message){
	F(message);

	I("C'est ça, continue comme ça...");
	I("Tu vas voir s'il y a une justice.");
	I("Au moins elle est efficace.");

	F("Pas autant que tu voudrais, hein ?");

	I("Cette fois-ci, je crois que si.");
	I("Tu vas plonger Frank.");

	Scene_2F_FrankTeachesBadCopHisJob();
}

function Scene_2F_FrankCooperates(message){
	F(message);

	F("Qu'est-ce que tu veux entendre ?");

	I("Qui a tué Kate Stillwell.");

	Choose({
		"Je sais pas, mais il n'a pas intérêt à ce que je le trouve." : Scene_2F_FrankAngryAboutTheMurderer,
		"Anna, j'en suis sûr." : Scene_2F_FrankRatsOut2,
		"Je ne peux coopérer que sur ce que je sais." : Scene_2F_FrankCooperatesOnlyWhenHeCan
	});
}

function Scene_2F_FrankAngryAboutTheMurderer(message){
	F(message);

	I("Parce que toi, tu n'as rien à te reprocher peut-être ?");

	F("Qu'est-ce que tu veux dire ?");

	I("Arrête de jouer l'innocent s'il te plaît.");
	I("Que ce soit dans cette affaire ou dans toutes les autres où tu es trempé jusqu'au cou.");

	F("On parle du meurtre de ma femme là.");
	F("Si tu as des preuves pour m'accuser d'autres choses, dis-le moi.");
	F("Sinon, on en revient à Kate.");

	Scene_2F_FrankTeachesBadCopHisJob();
}

function Scene_2F_FrankRatsOut2(message){
	F(message);
	F("Je l'ai vue sur la scène du crime.");

	I("...");
	I("Au moment du meurtre ?");

	F("Juste après. Je peux témoigner.");

	FrankWantsAnnaInPrison = true;

	I("Bien.");
	I("Merci pour ces infos.");
	I("Je vais pouvoir faire tomber Anna.");
	I("Mais ne crois pas que tu vas t'en sortir comme ça.");
	I("Je vais trouver quelque chose pour te faire plonger aussi.");

	F("Sale vermine.");
	F("Je crois que c'est toi qui ne réalises pas bien qui je suis.");
	Scene_2F_FrankTeachesBadCopHisJob();
}

function Scene_2F_FrankCooperatesOnlyWhenHeCan(message){
	F(message);

	I("Ca ne m'aide pas beaucoup.");
	I("Et c'est pas comme ça que tu vas t'en sortir.");
	I("Fais un effort...");

	F("Je ne vais pas inventer, si ?");
	F("C'est ça que tu veux ?");
	F("Retrouver le meurtrier de ma femme ne t'intéresse pas ?!");

	I("Evidemment que si!");

	PlaySound("sfx", "heartbeat");
	Wait(8000);

	BadCopIsAngry++;

	Scene_2F_FrankTeachesBadCopHisJob();
}

function Scene_2F_FrankTeachesBadCopHisJob(){
	F("...");
	F("Bon, on n'avance pas beaucoup.");
	F("Faut que je t'apprenne à faire ton métier et à poser les questions ?");

	I("Comment oses-tu ?!");

	if(BadCopIsAngry > 2){
		PlaySound("sfx", "fist_on_table");
		Wait(2000);
		PlaySound("sfx", "heartbeat");
		Wait(3000);
		I("T'es un homme mort !");
		I("Tu entends ?");
		I("Un homme mort !");
		I("Rien à foutre que t'ais pas tué ta femme !");
	} else {
		I("C'est la fin pour toi Frank.");
		I("Je te laisserai pas t'en tirer une fois de plus.");
	}

	Scene_2F_Interrupt();
}

function Scene_2F_Interrupt(){
	PlaySound("sfx", "opening_door");
	Wait(3000);
	Clear();
	Show("background","scene_2_male_inspector_gone");
	PlaySound("sfx", "slamming_door");
	Wait(3000);
	PlaySound("sfx", "heartbeat");
	Wait(8000);

	End_Scene_2F();
}

function End_Scene_2F(){

	var recap = { 
		'BadCopIsAngry' : BadCopIsAngry,
		'FrankYouLiar' : FrankYouLiar,
		'FrankWantsAnnaInPrison' : FrankWantsAnnaInPrison,
		'FrankHoldUp' : FrankHoldUp
	};

	sendRecap(recap);

	console.log(recap);

	Clear();

	//ne commencer la scene 3 que si ready (par rapport à l'autre joueur)
	if(ready){
		Start_Scene_3F();
	} else {
		ready = true;
		N("Les inspecteurs se transmettent les informations.");
		N("L'interrogatoire devrait reprendre d'ici peu.");
	}
}
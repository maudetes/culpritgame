// SCENE_3 : CONTINUATION OF THE QUESTIONNING FOR ANNA

var Immunity = false;
var AnnaNoticedBadCopBluffed = false;

function Start_Scene_3A(){
	
	ready = false;

	/////// SET UP SCENE ////////
	Clear();
	Show("background","scene_3_female_inspector_gone");
	/////////////////////////////

	//I("Putain de policiers!"); //italic
	//I("Jamais contents quand je fais mon travail.");

	Wait(5000);
	PlaySound("sfx", "whispering");
	Wait(7000);

	Clear();
	Show("background","scene_3_female");
	PlaySound("sfx", "slamming_door");
	Wait(3000);

	I("Je suis Jerry Carter.");
	I("Je viens de m'entretenir avec Frank.");
	I("Ca ne s'est pas très bien passé pour lui.");

	// A dire dans tous les cas ? Ou que si Frank n'a pas trahi Anna ?
	I("J'espère pour vous que vous serez plus coopérative.");
	I("Frank va couler cette fois-ci.");
	I("Je vous conseille de le balancer si vous ne voulez pas couler avec lui.");

	Choose({
		"Je vais juste dire la vérité, je ne vais pas inventer." : Scene_3A_WontInvent,
		"C'est bon, je dirai tout ce que vous voulez entendre." : Scene_3A_WillInvent,
		"Votre collègue était plus sympathique." : Scene_3A_AlfredIsNicer
	});

}

function Scene_3A_WontInvent(message){
	A(message);
	A("Mais j'imagine que c'est ce que vous voulez, non ?");

	I("...");
	PlaySound("sfx", "laugh_bad_cop");
	Wait(4000);
	I("Tant que les ordures sont en prison, la vérité je m'en moque.");

	A("C'est bon à savoir.");

	I("Vous faîtes la maligne, mais je préfère vous mettre au courant.");

	Scene_3A_FrankRattedOnYou();
}

function Scene_3A_WillInvent(message){
	A(message);
	I("Ah !");
	I("Enfin quelqu'un de raisonnable !");

	Scene_3A_AnnaIsGoingToTalk("...");
}

function Scene_3A_AlfredIsNicer(message){
	A(message);
	A("Pas étonnant que l'interrogatoire de Frank se soit mal passé.");

	I("Pas si mal passé, parce que j'ai eu des avoeux.");

	Scene_3A_FrankRattedOnYou();
}

function Scene_3A_FrankRattedOnYou(){
	I("Frank vous a balancée.");

	Choose({
		"Quoi ? Ce c****** ! ": Scene_3A_AnnaIsGoingToTalkOrNot,
		"Vous bluffez...": Scene_3A_AnnaTrustsFrank,
		"Ca ne m'étonne pas." : Scene_3A_AnnaIsGoingToTalkOrNot
	})
}

function Scene_3A_AnnaTrustsFrank(message){
	A(message);

	//Bonus : different answer depending on Anna ratting on Frank on the previous scene or not
	if (otherRecap.FrankWantsAnnaInPrison){
		raison = ""; //TODO : depending on rat ?
		I("Bah pourtant, il ne s'est pas gêné pour me dire qu'il te pensait coupable.");
	} else { //Frank did not rat

		AnnaNoticedBadCopBluffed = true;

		I("...");

		A("Je le connais, il ne m'aurait jamais fait ça !");

		I("Ok, ok c'est bon.");
		I("Je tentais juste de vous tester.");
		I("Je dois admettre que pour un escroc, il est pas du genre à balancer.");
		I("On va voir ce qu'il en est de vous");
	}

	Scene_3A_AnnaIsGoingToTalkOrNot();
}

function Scene_3A_AnnaIsGoingToTalkOrNot(message){
	A(message);

	I("Vous vous décidez à le dénoncer ?");

	Choose({
		"Oui": Scene_3A_AnnaIsGoingToTalk,
		"Non": Scene_3A_AnnaIsNotGoingToTalk,
		"...": Scene_3A_AnnaIs
	})
}

function Scene_3A_AnnaIsGoingToTalk(message){
	A(message);

	AnnaWantsFrankInPrison = true;

	I("Très bien.");
	I("Vous pouvez détailler.");

	A("Quand je suis arrivée, je l'ai vu penché au-dessus du corps de sa femme.");
	A("Il venait de la tuer.");

	I("Une idée sur le mobile ?");

	Choose({
		"Une histoire de crime passionnel.": Scene_3A_AnnaIsSuggestingAMobile,
		"Leur couple n'allait pas très bien en ce moment.": Scene_3A_AnnaIsSuggestingAMobile,
		"Sûrement un n-ième désaccord.": Scene_3A_AnnaIsSuggestingAMobile
	})
}

function Scene_3A_AnnaIsSuggestingAMobile(message){
	A(message);

	I("Vous les aviez déjà entendu s'engueuler ?");

	A("Oui.");
	A("Et plus d'une fois.");

	I("Pafait.");
	PlaySound("sfx", "laugh_bad_cop");
	Wait(4000);
	// TODO : en italic : "prend des notes"
	
	I("C'est bon j'ai tout ce qu'il me faut.");
	I("On va s'arrêter là.");
	I("Merci Mme Collins pour votre coopération");
	if(Immunity)
		I("Je n'oublie pas notre accord.");

	I("On vous tiendra au courant du verdict.");

	End_Scene_3A();

}

function Scene_3A_AnnaIsNotGoingToTalk(message){
	A(message);

	I("A vos risques et périls.");
	I("Je vous rappelle que la peine de mort a été rétablie.");
	I("C'est ce qui vous attend si vous n'arrivez pas à vous innocenter.");

	if(AnnaNoticedBadCopBluffed){ 

		A("Je sais.");
		A("Mais vous n'avez rien contre Frank, c'est que du bluff !");
		A("Et je pense que votre collègue, lui, a su m'écouter.");
		A("En plus, c'est votre supérieur, non ?");

		I("Plus pour longtemps !");
		PlaySound("sfx", "laugh_bad_cop");
		Wait(4000);
		I("Une fois que je réussirai à inculper Frank, je vais prendre du grade.");
		I("Je serai connu comme celui qui a fait plonger le grand Frank Prescott !");
		PlaySound("sfx", "laugh_bad_cop");
		Wait(4000);

		A("...");
		A("Est-ce de ça dont il s'agit depuis le début ?!");

		I("Fermez-là !");
		PlaySound("sfx", "fist_on_table");
		Wait(5000);
		I("J'en ai fini avec vous.");
		I("On vous tiendra au courant du verdict.");
		I("Aurevoir Mme Collins.");

	} else {
		A("...");
		A("J'ai dit tout ce que j'avais à dire à votre collègue.");
		A("J'espère qu'il prendra les bonnes décisions.");

		I("Je comprends qu'on n'a plus rien à se dire.");
		I("Je ne vous remercie pas pour votre coopération...");		
		I("On vous tiendra au courant du verdict.");
		I("Aurevoir Mme Collins.");
	}

	End_Scene_3A();
}

function Scene_3A_AnnaIs(message){
	A(message);

	I("Vous voulez une contrepartie, c'est ça ?");
	I("Je peux rien vous promettre.");
	I("Mais je peux réduire les accusations contre vous si vous coopérez.");

	I("Du coup ?");

	Choose({
		"Oui": Scene_3A_AnnaIsGoingToTalk,
		"Non": Scene_3A_AnnaIsNotGoingToTalk,
		"...": Scene_3A_AnnaIsIs
	})
}

function Scene_3A_AnnaIsIs(message){
	A(message);

	Immunity = true;

	I("C'est l'immunité que vous voulez ?");
	I("...");
	I("Très bien !");
	I("Vous le balancez, vous vous en sortez.");
	I("Ok ?");

	Choose({
		"Oui": Scene_3A_AnnaIsGoingToTalk,
		"Non": Scene_3A_AnnaIsNotGoingToTalk
	})
}

function End_Scene_3A(){
	var recap = {
		// var scene 2A
		'AnnaYouLiar' : AnnaYouLiar,
		'unknownNumber' : unknownNumber,
		'AnnaFrankTogether' : AnnaFrankTogether,
		'whoCalledThePolice' : whoCalledThePolice,
		'AnnaWantsFrankInPrison' : AnnaWantsFrankInPrison,
		'AnnaYouHacker' : AnnaYouHacker,
		'AnnaArrivedAfterFrank' : AnnaArrivedAfterFrank,
		'AnnaKateFriends' : AnnaKateFriends,
		// var scene 3A
		'Immunity' : Immunity,
		'AnnaNoticedBadCopBluffed' : AnnaNoticedBadCopBluffed
	};


	sendRecap(recap);

	console.log(recap);

	Wait(3000);
	PlaySound("sfx", "opening_door");
	Wait(3000);
	Clear();
	PlaySound("sfx", "closing_door");
	Wait(4000);

	Clear();
	//ne commencer la scene 4 que si ready (par rapport à l'autre joueur)
	if(ready){
		Start_Scene_4();
	} else {
		ready = true;
	}
}
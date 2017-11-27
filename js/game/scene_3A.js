// SCENE_3 : CONTINUATION OF THE QUESTIONNING FOR ANNA

function Start_Scene_3A(){
	
	/////// SET UP SCENE ////////
	Clear();
	Show("background","scene_3_female");
	/////////////////////////////

	// TODO : + murmure and heartbeats ?	
	//I("Putain de policiers!"); //italic
	//I("Jamais contents quand je fais mon travail.");

	// TODO : porte + change background
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

function scene_3A_WontInvent(message){
	A(message);
	A("Mais j'imagine que c'est ce que vous voulez, non ?");

	I("...");
	I("Tant que les ordures sont en prison, la vérité je m'en moque.");

	A("C'est bon à savoir.");

	I("Vous faîtes la maligne, mais je préfère vous mettre au courant.");

	Scene_3A_FrankRattedOnYou();
}

function Scene_3A_WillInvent(message){
	A(message);
	I("Ah !");
	I("Enfin quelqu'un de raisonnable !");

	AnnaIsGoingToTalk("...");
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
	if (true){ //TODO : Frank ratted
		raison = ""; //TODO : depending on rat
		I("Bah pourtant, il ne s'est pas gêné pour me dire que + raison");
	} else { //Frank did not rat
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
		"Oui": AnnaIsGoingToTalk,
		"Non": AnnaIsNotGoingToTalk,
		"...": AnnaIs
	})
}

function AnnaIsGoingToTalk(message){
	A(message);
}

function AnnaIsNotGoingToTalk(message){
	A(message);
}

function AnnaIs(message){
	A(message);
}

function End_Scene_3A(){
	Clear();
	Start_Scene_4();
}
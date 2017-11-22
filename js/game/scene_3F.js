// SCENE_3 : CONTINUATION OF THE QUESTIONNING FOR FRANK

// Common vars
var AnnaFrankTogether = false;
var AnnaFrankAgreedAboutRelationship = false;
var FrankSaidRelionshipWas;

function Start_Scene_3F(){
	
	/////// SET UP SCENE ////////
	Clear();
	Show("background","scene_3_male");
	/////////////////////////////

	I("Bonjour, je suis l'interrogateur Hawkins.");	
	I("Excusez mon collègue pour son attitude.");
	I("Vous commencez à la connaître, il a tendance à s'emporter rapidement...");
	I("C'est moi qui vais mener la fin de cet interrogatoire.");

	F("Pas de souci, j'ai l'habitude...");

	I("On va tout reprendre depuis le début.");

	F("...");

	I("Quelle est votre relation avec Anna Collins ?");

	Choose({
		"On est amants." : Scene_3F_Part2,
		"Juste une vague connaissance." : Scene_3F_Part2,
		"C'est juste une collègue." : Scene_3F_Collegues
	});
}

function Scene_3F_Part2(message){
	FrankSaidRelionshipWas = message;
	F(message);
	//TODO envoyer les variables d'un joueur à l'autre
	if(){ //concorde pas 
		AnnaFrankAgreedAboutRelationship = false;

		I("Etrange...");
		I("C'est pas ce que madame Collins m'a raconté.");
		I("A ce rythme là, si vos versions divergent trop vous serez tous les deux jugés coupables.");
		I("Mais c'est peut être elle qui ment...");
		I("Je ne peux pas encore délier le vrai du faux.");
		I("Je me ferai une idée par rapport à ce que vous me dites par la suite.");
	}
	else{
		//TODO cas ou ça concorde
		AnnaFrankAgreedAboutRelationship = true;
	}

}

function Scene_3F_Collegues(message){
	F(message);
}



function End_Scene_3F(){
	Clear();
	Start_Scene_4();
}
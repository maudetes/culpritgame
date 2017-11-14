// SCENE_2 : BEGINNING OF THE QUESTIONNING

// Common vars
var unknownNumber = false;
var AnnaFrankTogether = false;
var whoCalledThePolice = false;
var AnnaYouLiar = 0;
var AnnaWantsFrankInPrison = false;

function Start_Scene_2(){

	/////// SET UP SCENE ////////
	Clear();
	
	Show("background","interrogation_room_female");
	/////////////////////////////

	I("Bonjour, je suis l'interrogateur Hawkins.");
	I("Vous êtes en garde à vue, savez-vous pourquoi vous êtes là ?");

	Choose({
		"Oui, c'est par rapport au meurtre de Kate." : KateMurder,
		"Non, laissez moi partir, je n'ai rien à faire ici." : LeaveAlone,
		"J'imagine que le cadavre n'y est pas pour rien." : CorpseMurder
	});	
}

function KateMurder(message){
	A(message);

	I("En effet, c'est bien pour cette raison.");
	
	Scene2Part2();

}

function LeaveAlone(message){
	A(message);

	I("Vous avez été retrouvée sur la scène d'un meurtre.");
	I("Ceci est suffisant pour vous mettre en garde à vue.")

	Scene2Part2();
}

function CorpseMurder(message){
	A(message);

	I("Jouez pas au plus fin avec moi, on est pas ici pour rigoler.");
	// TODO : variable sur la froideur de A

	Scene2Part2();
}

function Scene2Part2(){
	I("Vous êtes suspecte, ainsi que Frank Prescott.");
	I("Ce dernier est interrogé par mon collègue Jerry Carter.");
	I("Je vous rappelle qu'à la suite de cette interrogatoire, justice sera faite.");

	Choose({
		"Oui, je sais ..." : Aware,
		"J'ai le droit d'avoir un avocat ?" : Avocado,
		"Je suis pas sûre qu'il y ait une justice dans ce pays." : Revolution
	})
}

function Aware(message){
	A(message);

	I("Très bien alors, vous savez à quoi vous attendre.");

	Scene2Part3();
}

function Avocado(message){
	A(message);

	I("Quoi ? Vous avez déjà faim ?");

	A("...");

	I("Vous savez bien que depuis la réforme jusdiciaire de 1987,\
	 les avocats n'existent plus.");
	I("De ce fait, la justice est beaucoup plus expéditive.");

	Scene2Part3();
}

function Revolution(message){
	A(message);

	I("On est pas ici pour débattre sur la justice.");
	I("Au moins, elle est efficace.");

	Scene2Part3();
}

function Scene2Part3(){
	I("Revenons-en aux faits.");
	I("Pouvez-vous m'expliquer ce que vous faisiez sur le lieu du crime ?");

	Choose({
		"J'ai reçu un SMS de Kate." : Sms,
		"Kate m'a appelé paniquée." : PanicKate,
		"Je suis venu mettre les choses au clair avec Kate." : ClarifyingKate
	});
}

function Sms(message){
	A(message);
	A("Elle voulais que j'aille chez elle.");

	ImportantChoice();
}

function PanicKate(message){
	A(message);

	A("Frank commencait à lui faire peur.");
	A("Mais, apparement, je suis arrivée trop tard.");

	AnnaWantsFrankInPrison = true;

	I("C'est bizarre, il y a aucune trace cette appel téléphonique dans \
		le téléphone de Mme Stillwell.");
	I("Par contre, on a trouvé un SMS accusateur vous étant adressée.");

	A("...");
	A("Si vous savez déjà, pourquoi me posez-vous la question ?");

	I("Tout simplement pour tester votre sincérité.");
	I("Je vous conseille de mieux coopérer pour la suite.");
	
	AnnaYouLiar++;

	I("Maintenant, expliquez moi la signification du SMS.");

	ImportantChoice();
}

function ClarifyingKate(message){
	A(message);

	I("A quel sujet ?");

	ImportantChoice();
}

function ImportantChoice(){
	Choose({
		"Elle s'imaginait des choses entre Frank et moi." : AFnotTogether,
		"Elle pensait que je participais aux magouilles de Frank" : Fmafiosi,
		"Elle était au courrant que j'entretenais une relation avec Frank" : AFTogether
	});
}

function AFnotTogether(message){

	A(message);

	I("Mais alors, qui est Frank pour vous ?");

	A("Juste une connaissance");

	I("Pourquoi elle vous suspectait alors ?");

	A("Pas la moindre idée ...");

	I("...")

	Scene2Part4();
}

function Fmafiosi(message){
	A(message);

	I("C'est à dire ?");

	A("Je ne pense être celle qui va vous apprendre qu'il a la tête d'un gang.");

	I("Effectivement, on le connait déjà.");
	I("Mais alors, pourquoi elle vous suspectez ?");

	A("Disons que je suis très habile avec l'informatique.");
	A("Du coup, elle a dût penser qu'ils ont eu recours à mes services.");
	//TODO : variable info

	I("Est-ce le cas ?");

	A("Non.");

	I("...");

	Scene2Part4();
}

function AFTogether(message){
	A(message);

	AnnaFrankTogether = true;

	I("Et vous pensez qu'elle aurait pu s'énerver ?");

	A("La relation entre Frank et Kate était sur le point de craquer.");
	A("Ainsi, je ne pensais pas qu'elle s'enflamerai autant");

	Scene2Part4();
}

function Scene2Part4(){
	I("Passon à la suite.");
	I("Quel était votre lien avec Kate Stillwell ?");

	Choose({
		"Je ne la connaissais pas personnellement." : KateIsAStranger,
		"C'était une amie depuis de nombreuses années." : KateIsAFriend,
		"Pour moi c'était juste la femme de Frank" : KateIsFranksWife
	});
}

function KateIsAStranger(message){
	A(message);
	A("Je voyais bien qui elle était, mais je ne lui avais jamais parlé.");

	I("Suffisamment pour qu'elle ait votre numéro, non ?");

	A("Je ne sais pas comment elle a pu l'avoir !");
	A("C'est vraiment surprenant");
	A("J'ai pour habitude de ne pas donner mon numéro à n'importe qui...");

	unknownNumber = true;

	Scene2Part5();
}

function KateIsAFriend(message){
	A(message);

	if (AnnaFrankTogether){
		I("Votre amie, mais vous entreteniez une relation avec son mari ?");

		A("Je ne crois pas que ce soit illégal, si ?");

		I("...");
	}
	else{
		I("Est-ce que vous avez une idée de pourquoi elle aurait pu être assassinée ?");

		A("Non, pas du tout !");
		A("Elle n'a jamais mentionnée avoir d'ennemis, et elle était une personne très appréciée.")
	}

	Scene2Part5();
}

function KateIsFranksWife(message){
	A(message);

	I("Mais elle vous connaissait, elle ?");

	A("Non, je ne pense pas.");

	I("Pourtant elle avait votre numéro...");

	A("Je ne sais pas comment elle a pu l'avoir !");
	A("C'est vraiment surprenant");
	A("J'ai pour habitude de ne pas donner mon numéro à n'importe qui...");

	unknownNumber = true;

	Scene2Part5();
}

function Scene2Part5(){
	I("Continuons.");
	I("Pouvez-vous me dire à quelle heure vous êtes arrivée chez Kate Stillwell ?");

	Choose({
		"Un peu après 19h." : After19h,
		"Entre 21h et 22h." : Between21hAnd22h,
		"Euuuh... Juste après Frank." : AfterFrank
	});

}

function After19h(message){
	A(message);

	I("A peine 2-3 minutes avant l'arrivée de la police, donc ?");

	A("Oui, j'ai juste eu le temps d'entendre des coups de feu et de découvrir le cadavre...");

	I("Et la police est arrivée juste après ?");

	A("Oui.");
	A("Maintenant que vous le dîtes, ça semble étrange.");
	A("Surtout que leur maison est en pleine campagne.");

	if (AnnaYouLiar > 0){
		I("Qu'est-ce que vous insinuez là ?");
		I("Vous vous rendez bien compte que votre histoire ne tient pas debout ?");
		I("Vous m'avez déjà menti une fois, je vous avais prévenu de ne pas recommen--");
		AnnaYouLiar++;
	} else {
		A("Est-ce que vous savez qui a prévenu la police ?");

		I("...");
		I("C'est moi qui pose les questi--");

		whoCalledThePolice = true;
	}

	Interrupt();
}

function Between21hAnd22h(message){
	A(message);	

	I("...");
	I("Il est 20h45.");
	AnnaYouLiar++;

	A("Ah. Je me suis peut-être un peu trompée.");
	A("J'aurais essayé.");

	I("Vous vous rendez bien compte que mentir ne joue pas en votre faveu--");

	Interrupt();

}

function AfterFrank(message){
	A(message);	

	if(AnnaWantsFrankInPrison){
		I("Ah bah oui bien sûr.");
		I("Vous êtes de moins en moins convaincante...");
		I("Vous lui en voulez vraiment à Frank ?");

		AnnaYouLiar++;

		A("Non, pas du tou--.");
	}
	else {
		I("Il était arrivé depuis longtemps ?");

		A("Je ne sais pas.");
		A("J'ai juste eu le temps d'entendre des coups de feu et de découvrir le cadavre...");

		I("Et la police est arrivée juste après ?");

		A("Oui.");
		A("Maintenant que vous le dîtes, ça semble étrange.");
		A("Surtout que leur maison est en pleine campagne.");

		A("Est-ce que vous savez qui a prévenu la police ?");

		I("...");
		I("C'est moi qui pose les questi--");

		whoCalledThePolice = true;
	}

	Interrupt();

}

function Interrupt(){
	// ADD sounds (knock knock + opening door) 

	I("Excusez-moi.");

	// modify image without the inspector
	// whispers
	// modify image to original

	//TODO : final texts

	End_Scene_2();
}

function End_Scene_2(){
	Clear();
	Start_Scene_3();
}
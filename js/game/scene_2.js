// SCENE_2 : BEGINNING OF THE QUESTIONNING

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

	I("C'est bizarre, il y a aucune trace cette appel téléphonique dans \
		le téléphone de Mme Stillwell.");
	I("Par contre, on a trouvé un SMS accusateur vous étant adressée.");

	A("...");
	A("Si vous savez déjà, pourquoi me posez-vous la question ?");

	I("Tout simplement pour tester votre sincérité.");
	I("Je vous conseille de mieux coopérer pour la suite.");
	// TODO : variable sur la sincérité de A

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
		"Elle était au courrant que j'entretenais une relation avec Frank" : AFTogether}
	});
}

function AFnotTogether(message){
	A(message);

	I("Mais alors, qui est Frank pour vous ?");

	A("Juste une connaissance");

	I("Pourquoi elle vous suspectez alors ?");

	A("Pas la moindre idée ...");

	//TODO : faire la suite
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
}

function AFTogether(message){
	A(message);

	I("Et vous pensez qu'elle aurait pu s'énerver ?");

	A("La relation entre Frank et Kate était sur le point de craquer.");
	A("Ainsi, je ne pensais pas qu'elle s'enflamerai autant");
}

function End_Scene_2(){
	Clear();
	Start_Scene_3();
}
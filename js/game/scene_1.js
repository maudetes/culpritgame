// SCENE_1 : PROLOGUE

function Start_Scene_1(){
	
	/////// INTRO ////////
	Clear();
	Show("background","black");
	Wait(500);
	PlaySound("sfx","gun_shot");
	Wait(3000);
	PlaySound("sfx","running_footsteps");
	Wait(5000);
	/////////////////////////////

	//Show("background","interrogation_room_male");

	F("Putain de merde, non ! Kate !");
	A("Merde !");
	A("Frank ?!");
	F("Anna ?!");
	F("Qu'est c'tu fous là ?!");
	A("J'ai reçu un SMS de ta femme...");
	F("Merde, moi aussi ! Elle a appris pour nous deux.");
	ChooseIf("Anna", {
		"Tu crois qu'elle pensait qu'on était en couple ?": Lovers,
		"Comment elle a pu être au courant pour le braquage ?": HoldUp,
		"Pourtant je pensais qu’elle fermait les yeux sur tes magouilles...": OpenMinded
	});
}

function Lovers(message){
	SendChoiceIf("Anna", room, "Lovers", message);
	A(message);
	//ajouter un message car sinon bizarre avec "Je comprends pas putain !"
	Scene_1_next();
}

function HoldUp(message){
	SendChoiceIf("Anna", room, "HoldUp", message);
	A(message);
	Scene_1_next();
}
function OpenMinded(message){
	SendChoiceIf("Anna", room, "OpenMinded", message);
	A(message);
	Scene_1_next();
}

function Scene_1_next(){
	F("Je comprends pas putain !");
	A("Mais qu'est-ce qui s'est passé ?");
	A("Elle est morte ?!");
	F("Elle respire plus...");
	F("Elle s'est pris trois balles en plein coeur...");
	A("Mais putain qui aurait bien pu lui vouloir du mal ?");
	ChooseIf("Frank", {
		"C'est peut-être un coup de ces connards de Costa Nostra.": Gang,
		"J'ai trop d'ennemis pour en être sûr. Ca pourrait même être toi...": AccuseAnna,
		"Elle avait rien à voir là dedans putain !": KateWasInnocent
	});
}

function Gang(message){
	SendChoiceIf("Frank", room, "Gang", message);
	F(message);
	F("Le gang a du flairer qu'on préparait un truc...");
	A("Impossible ! J'ai effacé toutes nos traces !");
	A("J'ai même supprimmé toutes les vidéos de surveillance...");
	Siren();
}

function AccuseAnna(message){
	SendChoiceIf("Frank", room, "AccuseAnna", message);
	F(message);
	ChooseIf("Anna", {
		"Depuis le temps qu'on se connaît ?!": AnnaSavedYou,
		"Tu me prends pour une amatrice ou quoi ?": AnnaIsNotKidding,
		"Arrête, je sais bien que t'en pouvais plus d'elle...": AnnaAccusesFrank
	});
}

function KateWasInnocent(message){
	SendChoiceIf("Frank", room, "KateWasInnocent", message);
	F(message);
	Siren();
}

function AnnaSavedYou(message){
	SendChoiceIf("Anna", room, "AnnaSavedYou", message);
	A(message);
	A("J'tai sauvé la mise plusieurs fois, déconne pas !");
	Siren();
}

function AnnaIsNotKidding(message){
	SendChoiceIf("Anna", room, "AnnaIsNotKidding", message);
	A(message);
	A("Si je voulais te faire plonger, tu remonterais pas à la surface !");
	Siren();
}

function AnnaAccusesFrank(message){
	SendChoiceIf("Anna", room, "AnnaAccusesFrank", message);
	A(message);
	Siren();
}

function Siren(){
	PlaySound("sfx","police_siren");
	Wait(2000);
	F("Merde, les flics !");
	A("Qu'est-ce qu'on fait ???");
	ChooseIf("Frank", {
		"Vite, on se met d'accord !": FrankCooperation,
		"Chacun pour sa peau...": FrankNoCooperation,
		"Si tu as tué ma femme je vais pas hésiter à te dénoncer.": FrankAccuses
	});
}

function FrankCooperation(message){
	SendChoiceIf("Frank", room, "FrankCooperation", message);
	F(message);
	ChooseIf("Anna", {
	"Ca me va !": BothWantCooperation,
	"Chacun pour sa peau, tu veux dire !": AnnaAnswers,
	"D’accord sur quoi ? Je suis innocente moi !": AnnaAnswers
	});
}

function FrankNoCooperation(message){
	SendChoiceIf("Frank", room, "FrankNoCooperation", message);
	F(message);
	ChooseIf("Anna", {
	"J’croyais qu’on comptait l’un pour l’autre !": AnnaAnswers,
	"Si c’est comme ça, je vais pas me laisser faire !": AnnaAnswers,
	"Arrête, on est partenaires non ?!": AnnaAnswers
	});
}

function FrankAccuses(message){
	SendChoiceIf("Frank", room, "FrankAccuses", message);
	F("Comment ça qu'est-ce quon fait ?!");
	F(message);
	ChooseIf("Anna", {
	"Je suis arrivée en même temps que toi, déconne pas.": AnnaCantBeMe,
	"Tu crois que je peux me permettre de croupir en prison ?": AnnaCantGoToPrison,
	"Quoi ?! Si c’est comme ça, je vais pas me laisser faire !": AnnaAnswers
	});
}

function BothWantCooperation(message){
	SendChoiceIf("Anna", room, "BothWantCooperation", message);
	A(message);
	EndingAgreements();
}

function AnnaAnswers(message){
	SendChoiceIf("Anna", room, "AnnaAnswers", message);
	A(message);
}

function AnnaCantBeMe(message){
	SendChoiceIf("Anna", room, "AnnaCantBeMe", message);	
	A("Mais ça peut pas être moi !");
	A(message);
}

function AnnaCantGoToPrison(message){
	SendChoiceIf("Anna", room, "AnnaCantGoToPrison", message);	
	A("Sérieusement ?!");
	A(message);
}

function EndingAgreements(){
	A("Pas un mot sur le braquage !");
	A("Et on est ici à cause du SMS, ok ?");
	F("Ok...");
	F("On sait rien sur cette histoire et on vient juste d’arriver..."); //(montrer l’heure)
	F("On dit qu’on n’a même pas eu le temps de se parler…");
	A("T’as rien qui pourrait te faire paraître suspect ?");
	F("A part le fait qu’on est des criminels renommés ?");
	F("J’ai rien sur moi en tout cas...");
	F("Et toi ?");
	A("Non plus !");
	A("On leur fait croire qu’on a une relation ?");
	A("Comme ça ils ne se douteront de rien pour le braquage...");
	ChooseIf("Frank", {
	"Oui, c’est mieux pour s’innocenter, vu le SMS !": EndingAgreementNext,
	"Non, moins on prétend se connaître, mieux c’est !": EndingAgreementNext,
	"Oui, mais on dit que c’était seulement l’histoire d’un soir...": EndingAgreementNext
	});
}
function EndingAgreementNext(message){
	SendChoiceIf("Frank", room, "EndingAgreementNext", message);
	F(message);
	F("Par contre, on précise qu'on est arrivés chacun de notre côté...");
	End_Scene_1();
}

function End_Scene_1(){
	//ajouter bruit de porte fracassée
	Clear();
	N("La police est arrivée sur place.");
	N("Elle vous trouve tous les deux aux côtés de la victime.");
	N("Vous êtes arrêtés comme suspect et amenés en salle d’interrogation.");
	N("Tout ce que vous direz pourra être retenu contre vous.");

	Start_Scene_2();
}
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
	A("J'ai reçu un SMS de ta femme ...");
	F("Merde, moi aussi ! Elle a appris pour nous deux.");
	ChooseIf("Anna", {
		"Histoire d'amants ...": Lovers,
		"Comment elle a pu être au courant pour le braquage ?": HoldUp,
		"Pourtant je pensais qu'elle était OK avec ça ...": OpenMinded
	});
}

function Lovers(message){
	SendChoiceIf("Anna", room, "Lovers", message);
	A(message);
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
	F("Elle respire plus ...");
	F("Elle s'est pris trois balles en plein coeur ...");
	A("Mais putain qui aurait bien pu lui vouloir du mal ?");
	ChooseIf("Frank", {
		"C'est peut-être un coup de ces connards de Costa Nostra.": Gang,
		"J'ai trop d'ennemis pour en être sûr. Ca pourrait même être toi ...": AccuseAnna,
		"Elle avait rien à voir là dedans putain !": KateWasInnocent
	});
}

function Gang(message){
	SendChoiceIf("Frank", room, "Gang", message);
	F(message);
	F("Le gang a du flairer qu'on préparait un truc ...");
	A("Impossible ! J'ai effacé toutes nos traces !");
	A("J'ai même supprimmé toutes les vidéos de surveillance ...");
}

function AccuseAnna(message){
	SendChoiceIf("Frank", room, "AccuseAnna", message);
	F(message);
	ChooseIf("Anna", {
		"Depuis le temps qu'on se connaît ?!": AnnaSavedYou,
		"Tu me prends pour une amatrice ou quoi ?": AnnaIsNotKidding,
		"Arrête, je sais bien que t'en pouvais plus d'elle ...": AccuseFrank
	});
}

function KateWasInnocent(message){
	SendChoiceIf("Frank", room, "KateWasInnocent", message);
	F(message);



}

function AnnaSavedYou(message){
	A(message);
	A("J'tai sauvé la mise plusieurs fois, déconne pas !");
	Siren();
}

function AnnaIsNotKidding(message){
	A(message);
	A("Si je voualis te faire plonger, tu remonterai pas à la surface !");
	Siren();
}

function AccuseFrank(message){
	A(message);
	Siren();
}
function Siren(){
	PlaySound("sfx","police_siren");
	Wait(2000);
}

function End_Scene_1(){
	Clear();
	Start_Scene_2();
}
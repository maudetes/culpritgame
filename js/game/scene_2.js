// SCENE_2 : BEGINNING OF THE QUESTIONNING

function Start_Scene_2(){

	/////// SET UP SCENE ////////
	Clear();
	if (player == 1)
		Show("background","interrogation_room_male");
	else
		Show("background","interrogation_room_female");
	/////////////////////////////

	I("Le reste du jeu n'a pas encore été implémenté.");	
	I("Vous pouvez réactualiser cette page et recommencer l'aventure !");	
}

function End_Scene_2(){
	Clear();
	Start_Scene_3();
}
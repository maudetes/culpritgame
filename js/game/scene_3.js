// SCENE_3 : CONTINUATION OF THE QUESTIONNING

function Start_Scene_3(){
	
	/////// SET UP SCENE ////////
	Clear();
	if (player == 1)
		Show("background","interrogation_room_male");
	else
		Show("background","interrogation_room_female");
	/////////////////////////////
}

function End_Scene_3(){
	Clear();
	Start_Scene_4();
}
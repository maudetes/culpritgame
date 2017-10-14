// SCENE_4 : EPILOGUE

function Start_Scene_4(){
	
	/////// SET UP SCENE ////////
	Clear();
	if (player == 1)
		Show("background","interrogation_room_male");
	else
		Show("background","interrogation_room_female");
	/////////////////////////////
}

function End_Scene_4(){
	Clear();
}
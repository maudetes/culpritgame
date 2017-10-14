// SCENE_1 : PROLOGUE

function Start_Scene_1(){
	
	/////// INTRO ////////
	Clear();
	Show("background","black");
	Wait(500);
	PlaySound("sfx","gun_shot");
	Wait(2000);
	PlaySound("sfx","running_footsteps");
	// Add "Oh shit !" ?
	Wait(4000);
	/////////////////////////////

	//Show("background","interrogation_room_male");
	End_Scene_1();
}

function End_Scene_1(){
	Clear();
	Start_Scene_2();
}
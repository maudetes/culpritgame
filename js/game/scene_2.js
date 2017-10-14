// SCENE_2 : BEGINNING OF THE QUESTIONNING

function Start_Scene_2(){

	/////// SET UP SCENE ////////
	Clear();
	if (player == 1)
		Show("background","interrogation_room_male");
	else
		Show("background","interrogation_room_female");
	/////////////////////////////

	I("Sais-tu pourquoi tu es ici ?");	
	P("Parce que j'ai fait quelque chose de mal ?");

	I("Disons que tu es soupçonné" + Genderize() + "...");

	Choose({
		"Encore une histoire de traffic ?": Choice_1,
		"C'est pas moi, je promets !": Choice_2,
		"Pas un meurtre quand même ?!": Choice_3
});

}

function Choice_1(message){

	// Rename this function

	$.suspicion_answer = "traffic";
	SendChoice(room, 'suspicion', $.suspicion_answer);

	P(message);
	
	Choose({
		"Yup, I'm just a sad sack of sadness.": Sadsack,
		"Sometimes... but not when I'm with you.": function(message){
			$.im_a_poet = true;

			P(message);
			I("Ah Nicky, you amateur poet.");
			P("Get me some french breads and wine,");
			End_Scene_2();
		},
		"I'm just a realist.": function(message){
			$.hippies = true;

			P(message);
			I("You need more positive thinking in your life.");
			End_Scene_2();
		}
	});

}

function Choice_2(message){

	$.suspicion_answer = "innocent";
	SendChoice(room, 'suspicion', $.suspicion_answer);

	$.im_a_poet = true;

	P(message);
	P("Otherwise, the whole movie would've all just been a lie.");
	I("Ah Nicky, you amateur poet.");

	Choose({
		"Aw yiss. Yes I did.": function(message){
			P(message);
			End_Scene_2();
		},
		"Mehhh, it was a tad confusing at times.": function(message){
			P(message);
			I("I believe that was the purpose.");
			End_Scene_2();
		},
		"BWOOOOOOOOOOONG": function(message){
			P(message);
			I("I'll interpret that as a yes.");
			End_Scene_2();
		}
	});

}
function Choice_3(message){

	$.suspicion_answer = "murder";
	SendChoice(room, 'suspicion', $.suspicion_answer);

	P(message);
	I("Oh?");

	Choose({
		"I'm a poet, and I didn't even know it.": function(message){

			$.im_a_poet = true;

			P("I'm a poet,");
			I("You're a lyrical miracle, the evidence is empircal.");
			End_Scene_2();

		},
		"Nah, I'm just a sad sack of sadness.": Sadsack,
		"Or both.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			P(message);
			I("You sound like my mother.");
			End_Scene_2();

		}
	});

}
function End_Scene_2(){
	Clear();
	Start_Scene_3();
}
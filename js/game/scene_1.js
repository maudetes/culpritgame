// This is the first scene of the game (called from menu.js)
// This file must be renamed to match the type of the scene ex : interrogation_1.js
// Name the first function accordingly ex : Start_Interrogation_1() and change it in menu.js

function Start_Scene_1(){
	
	/////// SET UP SCENE ////////

	Clear();
	if (player == 1)
		Show("background","interrogation_room_male");
	else
		Show("background","interrogation_room_female");

	/////////////////////////////

	I("Sais-tu pourquoi tu es ici ?");	
	P("Parce que j'ai fait quelque chose de mal ?");

	I("Disons que tu es soupçonné" + Genderize());

	Choose({
		"Encore une histoire de traffic ?": Choice_1,
		"C'est pas moi je promets ! ": Choice_2,
		"Pas un meurtre quand même ?": Choice_3
	});

}

function Choice_1(message){

	// Rename this function

	$.suspicion_answer = "traffic";

	// SendChoice(room, 'suspicion', $.suspicion_answer);

	P(message);
	I("So his entire redemption story was a lie?");
	P("A big fat lie.");
	I("You're a bit of a downer, aren't you?");

	Choose({
		"Yup, I'm just a sad sack of sadness.": Sadsack,
		"Sometimes... but not when I'm with you.": function(message){
			$.im_a_poet = true;

			P(message);
			I("Ah Nicky, you amateur poet.");
			P("Get me some french breads and wine,");
			Thanks();
		},
		"I'm just a realist.": function(message){
			$.hippies = true;

			P(message);
			I("You need more positive thinking in your life.");
			Thanks();
		}
	});

}
function Choice_2(message){

	$.suspicion_answer = "innocent";
	// SendChoice(room, 'suspicion', $.suspicion_answer);

	$.im_a_poet = true;

	P(message);
	P("Otherwise, the whole movie would've all just been a lie.");
	I("Ah Nicky, you amateur poet.");

	Choose({
		"Aw yiss. Yes I did.": function(message){
			P(message);
			Thanks();
		},
		"Mehhh, it was a tad confusing at times.": function(message){
			P(message);
			I("I believe that was the purpose.");
			Thanks();
		},
		"BWOOOOOOOOOOONG": function(message){
			P(message);
			I("I'll interpret that as a yes.");
			Thanks();
		}
	});

}
function Choice_3(message){

	$.suspicion_answer = "murder";
	// SendChoice(room, 'suspicion', $.suspicion_answer);

	P(message);
	I("Oh?");

	Choose({
		"I'm a poet, and I didn't even know it.": function(message){

			$.im_a_poet = true;

			P("I'm a poet,");
			I("You're a lyrical miracle, the evidence is empircal.");
			Thanks();

		},
		"Nah, I'm just a sad sack of sadness.": Sadsack,
		"Or both.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			P(message);
			I("You sound like my mother.");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	P(message);
	I("Aw, sorry to hear that.");
	Thanks();

}

function Thanks(){
	
	P("So yeah! Thanks for taking me out to watch Inception!");
	I("My pleasure, Nicky.");

	Choose({
		"They can never, ever know.": function(message){
			$.coming_out_readiness="no";
			P(message);
			I("Really, never?");
			Hiding();
		},
		"I wish I could tell them, too.": function(message){
			$.coming_out_readiness="yes";
			P(message);
			Hiding();
		},
		"I'm not ready to tell them yet.": function(message){
			$.coming_out_readiness="maybe";
			P(message);
			I("I can help you be ready.");
			Hiding();
		}
	});

}

function Hiding(){

	I("Nicky, hiding like this is eating away at your soul.");

	if($.suspicion_answer=="awake"){
		I("Like you said, what's the point of living a lie?");
	}
	if($.suspicion_answer=="dream"){
		I("It's... how'd you put it... 'a big fat lie'?");
	}

	if($.sadsack){
		I("When you said just now you're a sadsack?");
		I("I know you weren't joking. Not really.");
	}

	P("Jack, come on.");
	I("I came out to my parents last year.");
	if($.hippies){
		P("Heh.");
		I("The point is, my parents supported my coming out.");
	}else{
		I("And they were very supportive!");
	}

	I("How do you know your parents won't be supportive of you, too?");

	Choose({
		"Asian parents are usually very homophobic.": Hiding_2,
		"I don't know... I guess I haven't tried...": Hiding_2,
		"They don't support anything but STUDYING.": Hiding_2
	});

}

function Hiding_2(message){
	
	P(message);

	if($.coming_out_readiness=="no"){
		P("Again... They can never, ever know.");
	}

	I("It's imprecise, impersonal, impossible to truly connect.");

	if($.im_a_poet){
		P("Heh. You're an amateur poet like me, apparently.");
	}else{
		P("It's not too bad...");
	}

	if($.coming_out_readiness=="yes"){
		I("You yourself just said you wish you could tell them.");
	}else{
		I("Nicky.");
	}
	I("Tell them about us. Tonight.");

	Choose({
		"Tonight?! Heck no.": Hiding_3,
		"Sigh... I'll try my best.": Hiding_3,
		"I'll just carefully hint at it.": Hiding_3
	});

}

function Hiding_3(message){
	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
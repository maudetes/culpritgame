function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","interrogation_room_1");

	//////////////////////////////

	N("<b>CULPRIT GAME</b>");
	N("Un jeu pour briser les amitiés.");
	N("Est-ce que tu as 20 minutes et un ami pour y jouer ?");
	N("Es-tu prêt ?");

	Choose({
		"C'est parti !": Play,
		"Pourquoi ce jeu ?": function(){
			Credits("Who are you?");
		},
		"C'est quoi ce jeu ?": function(){
			About("Hm, tell me more.");
		}
	});
}

function Play(message){
	
	P(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("Jumping right into it! Great!");
		N("No messing around with reading the About Me or the About This Game sections or--");
		P("Shush.");
		N("Fine, fine.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		P(". . .");
		P("Why did you make that a clickable option, when it was the only option left.");
		N("NO IDEA");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("Yes, let's!");
	}

	N("Let's travel back five years ago, to 2010...");
	P("That was FIVE years ago?!");
	N("...to the evening that changed my life forever.");

	N("Tell me, dear player, how do you think this all ends?");

	Choose({
		"With flowers and rainbows and gay unicorns?": function(message){
			$.main_menu_convo_1 = 1;

			P(message);
			N("Yes. That is exactly how this game ends.");
			P("Really?");
			N("No.");
			Play_2();
		},
		"Apparently, with you redditing at Starbucks.": function(message){
			$.main_menu_convo_1 = 2;

			P(message);
			N("Hey, I'm coding on this laptop. Turning my coming-of-age story into the game you're playing right now.");
			P("Naw, you're probably procrastinating.");
			N("Look who's talking.");
			P("Touché, douché.");
			N("Anyway...");
			Play_2();
		},
		"IT ALL ENDS IN BLOOD": function(message){
			$.main_menu_convo_1 = 3;

			P(message);
			N("Uh, compared to that, I guess my story isn't that tragic.");
			N("Although that's kind of a glass one-hundredths-full interpretation.");
			P("blooooood.");
			N("Anyway...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		P("Shush.");
	}

	N("This game includes dialogue that I, my parents, and my ex-boyfriend actually said.");
	N("As well as all the things we could have, should have, and never would have said.");
	N("It doesn't matter which is which.");
	N("Not anymore.");

	Choose({
		"How can I win a game with no right answers?": function(message){
			$.main_menu_convo_2 = 2;

			P(message);
			N("Exactly.");
			P(". . .");
			Play_3();
		},
		"You're a bit of a downer, aren't you?": function(message){
			$.main_menu_convo_2 = 1;

			P(message);
			N("LIFE is a bit of a downer.");
			P("So that's a yes.");
			Play_3();
		},
		"This 'true' game is full of lies?": function(message){
			$.main_menu_convo_2 = 3;

			P(message);
			N("Even if the dialogue was 100% accurate, it'd still be 100% lies.");
			P(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		N("Because you skipped the About Me, my (not-yet-legal) name is Nicky Case. Just so you know.");
		P("Shush.");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "This game doesn't end with gay unicorns. "; break;
		case 2: whatISay = "This game is a coming-out, a coming-of-age, a coming-to-terms. "; break;
		case 3: whatISay = "This game ends not in blood, but in tears. "; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "Sorry for being a bit of a downer."; break;
		case 2: whatISay += "And there are no right answers."; break;
		case 3: whatISay += "And it's full of lies."; break;
	}
	N(whatISay);

	P("Hey, I just said that!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Clear();
	Start_Scene_1();
}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		P(message);
	}else{
		P("Pourquoi ce jeu ?");
	}
	
	N("Ah, eh bien ce jeu est un projet étudiant pour le cours IC06 !");
	N("C'est un cours sur l'industrie et la conception de jeux vidéo.");
	N("Il est enseigné à l'UTC.");
	P("...");
	N("Université de Technologie de Compiègne");

	P("Et c'est vous qui l'avez fait ?");

	N("Nous sommes les trois scénaristes / programmeurs / artistes de ce jeu");

	P("Wow ! Vous avez tout fait vous-même ?");

	N("Non, pas TOUT !");
	N("De nombreuses inspirations nous viennent du domaine public.")
	N("Toutes nos sources ou inspirations sont citées dans les crédits.")

	if($.asked_about){
		Choose({
			"Speaking of which, let's play that! Now!": Play
		});
	}else{
		Choose({
			"Speaking of that, can we play it now?": Play,
			"Why'd you make this? (About This Game)": function(){
				About("Why'd you make this?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	P(message);

	if($.asked_credits){
		N("I wanted to tell my story.");
	}else{
		N("This game...");
		N("...more like a conversation simulator, really...");
		N("...is a very personal story.");
	}
	
	P("Of course. You narcissist.");
	N("Ha, of course.");

	if($.asked_credits){
		P("Actually no, a narcissist would use their real name.");
		N("I told you, it IS my real na--");
		P("Aight, aight. Weirdo.");
	}

	N("I made this game for the #Nar8 Game Jam. Gave me an excuse. And a deadline!");
	P("You procrastinated until the last day to enter, didn't you.");
	N("Yes.");
	N("Also! This game is uncopyrighted. Dedicated to the public domain.");
	N("I'm as open with my source code as I am with my sexuality.");

	P("Ugh, that's a terrible pun.");
	N("Howzabout a 'Fork Me' programming pun?");
	P("noooooo.");

	if($.asked_credits){
		Choose({
			"Let's just play this game already.": Play
		});
	}else{
		Choose({
			"Bad puns aside, can we play now?": Play,
			"So who ARE you? (About Me)": function(){
				Credits("So who ARE you?");
			}
		});
	}

}
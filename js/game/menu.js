function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>CULPRIT GAME</b>");
	N("Un jeu pour briser les amitiés.");
	N("Est-ce que tu as 20 minutes et un ami pour y jouer ?");
	N("Est-tu prêt ?");

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

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("Jumping right into it! Great!");
		N("No messing around with reading the About Me or the About This Game sections or--");
		p("Shush.");
		N("Fine, fine.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("Why did you make that a clickable option, when it was the only option left.");
		N("NO IDEA");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("Yes, let's!");
	}

	N("Let's travel back five years ago, to 2010...");
	p("That was FIVE years ago?!");
	N("...to the evening that changed my life forever.");

	N("Tell me, dear player, how do you think this all ends?");

	Choose({
		"With flowers and rainbows and gay unicorns?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("Yes. That is exactly how this game ends.");
			p("Really?");
			N("No.");
			Play_2();
		},
		"Apparently, with you redditing at Starbucks.": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("Hey, I'm coding on this laptop. Turning my coming-of-age story into the game you're playing right now.");
			p("Naw, you're probably procrastinating.");
			N("Look who's talking.");
			p("Touché, douché.");
			N("Anyway...");
			Play_2();
		},
		"IT ALL ENDS IN BLOOD": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("Uh, compared to that, I guess my story isn't that tragic.");
			N("Although that's kind of a glass one-hundredths-full interpretation.");
			p("blooooood.");
			N("Anyway...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		p("Shush.");
	}

	N("This game includes dialogue that I, my parents, and my ex-boyfriend actually said.");
	N("As well as all the things we could have, should have, and never would have said.");
	N("It doesn't matter which is which.");
	N("Not anymore.");

	Choose({
		"How can I win a game with no right answers?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("Exactly.");
			p(". . .");
			Play_3();
		},
		"You're a bit of a downer, aren't you?": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("LIFE is a bit of a downer.");
			p("So that's a yes.");
			Play_3();
		},
		"This 'true' game is full of lies?": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("Even if the dialogue was 100% accurate, it'd still be 100% lies.");
			p(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		N("Because you skipped the About Me, my (not-yet-legal) name is Nicky Case. Just so you know.");
		p("Shush.");
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

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("Hey, I just said that!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("When you play...");
	N("Choose your words wisely.");
	N("Every character will remember everything you say. Or don't say.");
	p("Yeah. You even brought up my choices in this MAIN MENU.");
	N("Exactly.");

	N(". . .");
	N("Some things are hard not to remember.");
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("Pourquoi ce jeu ?");
	}
	
	N("Ah, eh bien ce jeu est un projet étudiant pour le cours IC06 !");
	N("C'est un cours sur l'industrie et la conception de jeux vidéo.");
	N("Il est enseigné à l'UTC.");
	p("...");
	N("Université de Technologie de Compiègne");

	p("Et c'est vous qui l'avez fait ?");

	N("Nous sommes les trois scénaristes / programmeurs / artistes de ce jeu");

	p("Wow ! Vous avez tout fait vous-même ?");

	N("Non, pas TOUT !");
	N("De nombreuses inspirations nous viennent du domaine public.")
	N("Toutes nos sources ou inspirations sont citées dans les crédits.")

	N("But although it's mostly just me behind this game...");
	N("...there's a lot of people behind this game's story.");

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

	SipCoffee(message);

	if($.asked_credits){
		N("I wanted to tell my story.");
	}else{
		N("This game...");
		N("...more like a conversation simulator, really...");
		N("...is a very personal story.");
	}
	
	p("Of course. You narcissist.");
	N("Ha, of course.");

	if($.asked_credits){
		p("Actually no, a narcissist would use their real name.");
		N("I told you, it IS my real na--");
		p("Aight, aight. Weirdo.");
	}

	N("I made this game for the #Nar8 Game Jam. Gave me an excuse. And a deadline!");
	p("You procrastinated until the last day to enter, didn't you.");
	N("Yes.");
	N("Also! This game is uncopyrighted. Dedicated to the public domain.");
	N("I'm as open with my source code as I am with my sexuality.");

	p("Ugh, that's a terrible pun.");
	N("Howzabout a 'Fork Me' programming pun?");
	p("noooooo.");

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
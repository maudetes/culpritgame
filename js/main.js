window.onload = function(){
	
	var loading_bar = document.getElementById("loading_bar");
	subscribe("resourceLoaded",function(){
		loading_bar.style.width = Math.floor((_resourcesLoaded/_resourcePromises.length)*100)+"%";
	});

	Q.all(_resourcePromises).then(function(){
		setTimeout(function(){
			document.getElementById("game").setAttribute("screen","blank");
		},1000);
		setTimeout(function(){
			document.getElementById("game").setAttribute("screen","game");
			Start();
		},1500);
	});

};

window.onresize = function(){ onResize(); };
function onResize(){
	document.getElementById("game").style.height = (document.getElementById("game_container").clientHeight-40)+"px";
}
onResize();
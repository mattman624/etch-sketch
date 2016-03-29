
var tiles = 5;
var color = "#000000";

$(document).ready(function() {

	createGrid(tiles);		

});

function createGrid(n){

	tilewidth = 1000 / n;
	tileheight = 1000 / n;

	for (var i = 1; i <= n; i++) {	

		jQuery('<div>',{

			class: 'row',
			id: 'row' + i			

		}).appendTo('div#container');	

		for (var j = 1; j <= n; j++) {
				
				jQuery('<div>',{

			class: 'tile',
			id: 'tile' + i + j,
			height: tileheight,
			width: tilewidth


		}).appendTo('#row' + i);

		console.log(j);

		}			
	}	

	jQuery('div.tile').mouseenter(function(event) {
		/* Act on the event */
		$(event.target).addClass('filled');
		
	});

}

function colorChange(n){

	if(n == 1){
		color = "#39B7CD";
	}

	$(".filled").css("background-color", color);
}

function clearEtch(){

	$("div").remove('.row');
	
	console.log("1");

	tiles = prompt("How many tiles per side?")
	createGrid(tiles);
	return false;

}


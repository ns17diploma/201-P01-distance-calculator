var rl = require('readline-sync');

var mapW = Number(rl.question( "Width of map: " ));
var mapH = Number(rl.question( "Height of map: " ));
var screenW = Number(rl.question( "Width of screen: " ));
var screenH = Number(rl.question( "Height of screen: " ));
var screenX = Number(rl.question( "X of screen: " ));
var screenY = Number(rl.question( "Y of screen: " ));
var aX = Number(rl.question( "X of monster: " ));
var aY = Number(rl.question( "Y of monster: " ));
	
if ( screenX > mapW || screenY > mapH || aX > mapW || aY > mapH || mapW <= 0 || mapH <= 0 ) {
	
	console.log("ERROR! Invalid input! ");
	
}

else {

	//count_screen_center_in_map
	var countSCW = screenW / 2 ;
	var countSCH = screenH / 2 ;
	var screenInMapX = screenX + countSCW;
	var screenInMapY = screenY + countSCH;

	//count_distance
	var calX1 = screenInMapX - aX;
	var calX = calX1 * calX1;
	var calY1 = screenInMapY - aY;
	var calY = calY1 * calY1;
	var totalDistance = parseInt(Math.sqrt(calX + calY));

	console.log(totalDistance);
}


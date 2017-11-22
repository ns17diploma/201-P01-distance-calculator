var rl = require('readline-sync');
var map_w = Number(rl.question("Map Width : "));//5300 
var map_h = Number(rl.question("Map Height : "));//3000
var screen_w = Number(rl.question("Screen Width : "));//1920
var screen_h = Number(rl.question("Screen Height : "));//1080
var screen_x = Number(rl.question("Screen x : "));//730
var screen_y = Number(rl.question("Screen y : "));//2100
var location_a_x = Number(rl.question("Location A x : "));//3800
var location_a_y = Number(rl.question("Location A y : "));//1200

var screen_location_x = parseInt((screen_w / 2) + screen_x);
var screen_location_y = parseInt((screen_h / 2) + screen_y);
var location_x = parseInt(location_a_x - screen_location_x);
var location_y = parseInt(location_a_y - screen_location_y);
var location_middle = parseInt((location_x * location_x) + (location_y * location_y));

var location_answer = Math.sqrt(location_middle);

console.log(location_answer);
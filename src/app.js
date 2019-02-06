import Map from "./Map.js";
import Constants from "./Constants.js";
import Keyboard from "./Keyboard.js";
import Player from "./Player.js";
import {renderGame} from "./Render.js";
import {updateGame} from "./Physics.js";
import Stats from "Stats";
import Demo from "./Demo.js";
import Sound from "./Sound.js";
import Global from "./G.js";

var stats = new Stats();
document.getElementById('fps').appendChild(stats.domElement);


var G = new Global();

console.log("mode: " + G.config.mode);

PIXI.loader
	.add('sarge_wd', "images/models/sarge/wd.json")
	.add('palette', "images/palette.png")
	.add('machine', "images/Mgun_ex.png")
	.add('gaunlett', "images/Gauntlet.png")
	.load(run);
	
function run(loader, resources) {
	
	G.resources = resources;
	
	// load demo
	if (G.config.mode == 'development') {
		G.demo.load("demo4.json", init); // for debug load local demo
	} else {
		G.demo.loadFromQuery(init); // for production
	}
	console.log("demo loaded");
}		


async function init()
{
	var timer = 0;

	await G.map.loadFromDemo(G.demo.data.Map);
	G.render.renderMap();

	/*
	// FIXME: respawn is not for demo
	for (var i = 0; i < G.players.length; i++)
	{
		//just for safe respawn
		var respawn = Map.getRandomRespawn();
		G.players[i].setXY(respawn.col * Constants.BRICK_WIDTH + 10, respawn.row * Constants.BRICK_HEIGHT - 24);
	}
	*/

	var gametic = 0;
	function gameLoop(timestamp) {
		stats.begin();

		//G.players[0].keyUp = Keyboard.keyUp;
		//G.players[0].keyDown = Keyboard.keyDown;
		//G.players[0].keyLeft = Keyboard.keyLeft;
		//G.players[0].keyRight = Keyboard.keyRight;

		for (var i = 0; i < G.players.length; i++)
		{
			// player physics
			G.players[i].physics.updateGame(timestamp);
			// player graphics
			G.render.renderGame(G.players[i]);
		}
		// if end of demo then stop rendering
		if ( !G.demo.nextFrame(gametic) )
			return;
		
		if (++gametic > Constants.FPS)
			gametic = 0;
		
		requestAnimationFrame(gameLoop); //infinite render loop
		
		stats.end();
	}

	requestAnimationFrame(gameLoop);


}


import GameObject from "./GameObject.js";
import Sound from "./../Sound.js";

export default
class RedFlag extends GameObject {
	constructor(g, x, y) {
		// adjust init sprite position on the map
		y -= 26;
		
		super(g, x, y);

		this.texture = g.resources.flag.spritesheet.animations.flag;
		this.animated = true;
		this.frameStart = 14;
		this.frameEnd = 27;
		this.width = 36;
		this.height = 41;
	}

	handleCollisions(player) {
		var that = this;
		super.handleCollisions(player, function(player){
			// TODO: take flag by a player (only by enemy player)
			return false;
		});
	}
}
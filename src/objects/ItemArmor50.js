import SimpleObject from "./SimpleObject.js";import Sound from "./../Sound.js";export defaultclass ItemArmor50 extends SimpleObject {	constructor(g, x, y) {		super(g, x, y);		this.itemId = 17;		this.texture = g.resources.armors.spritesheet.animations.armors;		this.animated = true;		this.frameStart = 0;		this.frameEnd = 19;		this.width = 32;		this.height = 16;				this.respawnTime = 30;		this.armor = 50;	}	handleCollisions(player) {		var that = this;		super.handleCollisions(player, function(player){			player.addArmor(that.armor);			Sound.play("armor");			return true;		});	}}
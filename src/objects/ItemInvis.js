import SimpleObject from "./SimpleObject.js";import Sound from "./../Sound.js";export defaultclass ItemInvis extends SimpleObject {	constructor(g, x, y) {		super(g, x, y);		this.itemId = 28;				this.texture = g.resources.powerup.spritesheet.animations.invis;		this.animated = true;		this.width = 32;		this.height = 16;				this.spawnDelay = 60; // first spawn after a minute		this.respawnTime = 120;	}	handleCollisions(player) {		var that = this;		super.handleCollisions(player, function(player){			// TODO: set invisible for a player			Sound.play("powerup_invis");			return true;		});	}}
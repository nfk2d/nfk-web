import SimpleObject from "./SimpleObject.js";import Sound from "./../Sound.js";export defaultclass ItemMedkit5 extends SimpleObject {	constructor(g, x, y) {		super(g, x, y);		this.itemId = 19;		this.texture = g.resources.medkits.textures['Medkits-0.png']		this.spritePos = 0;		this.width = 32;		this.height = 16;				this.respawnTime = 30;		this.health = 5;	}	handleCollisions(player) {		var that = this;		super.handleCollisions(player, function(player){			if (player.health >= 100)				return false;			player.addHealth(that.health, 100);			Sound.play("health5");			that.sprite.visible = false;			return true;		});	}}
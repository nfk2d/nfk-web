import SimpleObject from "./SimpleObject.js";import Sound from "./../Sound.js";export defaultclass ItemAmmo extends SimpleObject {	constructor(g, x, y, itemId, ammo) {		super(g, x, y);		this.itemId = itemId;		this.ammo = ammo;		this.texture = g.resources.items.textures['item-' + (this.itemId - 1) + '.png'];		this.width = 32;		this.height = 16;				this.respawnTime = 30;	}	handleCollisions(player) {		var that = this;		super.handleCollisions(player, function(player){			player.addWeaponAmmo(this.itemId, this.ammo);			Sound.play("ammopkup");			that.sprite.visible = false;			return true;		});	}}
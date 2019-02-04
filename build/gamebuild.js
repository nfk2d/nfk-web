!function(e){var t={};function a(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/build/",a(a.s=3)}([function(e,t){e.exports=Howl},function(e,t){e.exports=PIXI},function(e,t){e.exports=Stats},function(e,t,a){"use strict";a.r(t);var i={BRICK_WIDTH:32,BRICK_HEIGHT:16,PLAYER_MAX_VELOCITY_X:3,DDEMO_VERSION:0,DDEMO_FIREROCKET:1,DDEMO_PLAYERPOS:2,DDEMO_TIMESET:3,DDEMO_CREATEPLAYER:4,DDEMO_KILLOBJECT:5,DDEMO_FIREBFG:6,DDEMO_FIREPLASMA:7,DDEMO_FIREGREN:8,DDEMO_FIRERAIL:9,DDEMO_FIRESHAFT:10,DDEMO_FIRESHOTGUN:11,DDEMO_FIREMACH:12,DDEMO_ITEMDISSAPEAR:13,DDEMO_ITEMAPEAR:14,DDEMO_DAMAGEPLAYER:15,DDEMO_HAUPDATE:16,DDEMO_FLASH:17,DDEMO_JUMPSOUND:18,DDEMO_GAMEEND:19,DDEMO_RESPAWNSOUND:20,DDEMO_JUMPPADSOUND:21,DDEMO_LAVASOUND:22,DDEMO_POWERUPSOUND:23,DDEMO_EARNPOWERUP:24,DDEMO_READYPRESS:25,DDEMO_FLIGHTSOUND:26,DDEMO_EARNREWARD:27,DDEMO_STATS:28,DDEMO_GAMESTATE:29,DDEMO_TRIXARENAEND:30,DDEMO_OBJCHANGESTATE:31,DDEMO_CORPSESPAWN:32,DDEMO_GRENADESYNC:33,DDEMO_STATS2:34,DDEMO_PLAYERPOSV2:35,DDEMO_FIREGRENV2:36,DDEMO_NOAMMOSOUND:37,DDEMO_GAUNTLETSTATE:38,DDEMO_STATS3:39,DDEMO_FIREPLASMAV2:40,DDEMO_PLAYERPOSV3:41,DDEMO_BUBBLE:42,DDEMO_MPSTATE:43,DDEMO_NETRAIL:44,DDEMO_NETPARTICLE:45,DDEMO_NETTIMEUPDATE:46,DDEMO_NETSVMATCHSTART:47,DDEMO_DROPPLAYER:48,DDEMO_CREATEPLAYERV2:49,DDEMO_SPECTATORCONNECT:50,DDEMO_SPECTATORDISCONNECT:51,DDEMO_CHATMESSAGE:52,DDEMO_PLAYERRENAME:53,DDEMO_PLAYERMODELCHANGE:54,DDEMO_GENERICSOUNDDATA:55,DDEMO_GENERICSOUNDSTATDATA:56,DDEMO_TEAMSELECT:57,DDEMO_CTF_EVENT_FLAGTAKEN:58,DDEMO_CTF_EVENT_FLAGCAPTURE:59,DDEMO_CTF_EVENT_FLAGDROP:60,DDEMO_CTF_EVENT_FLAGPICKUP:61,DDEMO_CTF_EVENT_FLAGDROP_APPLY:62,DDEMO_CTF_EVENT_FLAGRETURN:63,DDEMO_CTF_GAMESTATE:64,DDEMO_CTF_EVENT_FLAGDROPGAMESTATE:65,DDEMO_CTF_GAMESTATESCORE:66,DDEMO_CTF_FLAGCARRIER:67,DDEMO_DOM_CAPTURE:68,DDEMO_DOM_SCORECHANGED:69,DDEMO_WPN_EVENT_WEAPONDROP:70,DDEMO_WPN_EVENT_PICKUP:71,DDEMO_WPN_EVENT_WEAPONDROP_APPLY:72,DDEMO_WPN_EVENT_WEAPONDROPGAMESTATE:73,DDEMO_DOM_CAPTUREGAMESTATE:74,DDEMO_NEW_SHAFTBEGIN:75,DDEMO_NEW_SHAFTEND:76,DDEMO_POWERUP_EVENT_POWERUPDROP:77,DDEMO_POWERUP_EVENT_PICKUP:78,DDEMO_POWERUP_EVENT_POWERUPDROPGAMESTATE:79,DDEMO_CTF_EVENT_FLAGTAKEN_RED:80,DDEMO_CTF_EVENT_FLAGCAPTURE_RED:81,DDEMO_CTF_EVENT_FLAGDROP_RED:82};document.addEventListener("keydown",function(e){192===e.keyCode&&((s=!s)?(r.classList.add("open"),h.scrollTop=h.scrollHeight,l.value="",l.focus()):r.classList.remove("open"),e.preventDefault())});var s=!1,r=document.getElementById("console"),h=document.getElementById("console-content"),l=document.getElementById("console-input"),p=h.innerHTML;l.addEventListener("keydown",function(e){if(13===e.keyCode){e.preventDefault();var t=l.value.trim();n.writeText(t),0===t.indexOf("map ")?document.location.href="?mapfile="+t.substring(4):"help"===t&&(n.writeText("Available commands:"),n.writeText("help"),n.writeText("map <mapname>")),l.value=""}});var n={writeText(e){e=e.toString(),(p+="<br>"+function(e){return e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}(e)).length>5e3&&(p=p.substring(p.length-5e3)),h.innerHTML=p,h.scrollTop=h.scrollHeight}},o=n,y={trunc:Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)},ord:e=>e.charCodeAt(0),random:e=>Math.floor(Math.random()*e)},c=0,d=0,u=[],E=[],D={loadNFKMap(e){var t=e;c=t.length;for(var a=0;a<t.length;a++){u[a]=[];var i=window.atob(t[a]);d=i.length;for(var s=0;s<i.length;s++){var r=y.ord(i[s]);u[a][s]=r>=48,34!=r&&35!=r&&36!=r||E.push({row:s,col:a})}}},isBrick:(e,t)=>e>=c||t>=d||e<0||t<0||u[e][t],getRows:()=>d,getCols:()=>c,getRandomRespawn:()=>E[y.random(E.length)]},O={keyUp:!1,keyDown:!1,keyLeft:!1,keyRight:!1};document.addEventListener("keydown",e=>{if(!(e.keyCode<37||e.keyCode>40)&&"textarea"!==e.target.nodeName.toLowerCase())switch(e.preventDefault(),e.keyCode){case 38:O.keyUp=!0;break;case 37:O.keyLeft=!0;break;case 39:O.keyRight=!0;break;case 40:O.keyDown=!0}}),document.addEventListener("keyup",e=>{if(!(e.keyCode<37||e.keyCode>40)&&"textarea"!==e.target.nodeName.toLowerCase())switch(e.preventDefault(),e.keyCode){case 38:O.keyUp=!1;break;case 37:O.keyLeft=!1;break;case 39:O.keyRight=!1;break;case 40:O.keyDown=!1}});var _=D.isBrick,m=y.trunc;class M{constructor(e,t){this.DXID=e,this.x=0,this.y=0,this.name=t,this.health=0,this.aror=0,this.follow=!1,this.velocityX=0,this.velocityY=0,this.keyUp=!1,this.keyDown=!1,this.keyLeft=!1,this.keyRight=!1,this.crouch=!1,this.doublejumpCountdown=0,this.cacheOnGround=!1,this.cacheBrickOnHead=!1,this.cacheBrickCrouchOnHead=!1,this.speedJump=0,this.graphics=null,this.physics=null}setX(e){e!=this.x&&(this.x=e,this.updateCaches())}setY(e){e!=this.y&&(this.y=e,this.updateCaches())}setXY(e,t){e===this.x&&t===this.y||(this.x=e,this.y=t,this.updateCaches())}updateCaches(){this.updateCacheOnGround(),this.updateCacheBrickOnHead(),this.updateCacheBrickCrouchOnHead()}updateCacheOnGround(){this.cacheOnGround=_(m((this.x-9)/32),m((this.y+25)/16))&&!_(m((this.x-9)/32),m((this.y+23)/16))||_(m(m(this.x+9)/32),m(m(this.y+25)/16))&&!_(m(m(this.x+9)/32),m(m(this.y+23)/16))||_(m((this.x-9)/32),m((this.y+24)/16))&&!_(m((this.x-9)/32),m((this.y+8)/16))||_(m((this.x+9)/32),m((this.y+24)/16))&&!_(m((this.x+9)/32),m((this.y+8)/16))}updateCacheBrickCrouchOnHead(){this.cacheBrickCrouchOnHead=_(m((this.x-8)/32),m((this.y-9)/16))&&!_(m((this.x-8)/32),m((this.y-7)/16))||_(m((this.x+8)/32),m((this.y-9)/16))&&!_(m((this.x+8)/32),m((this.y-7)/16))||_(m((this.x-8)/32),m((this.y-23)/16))||_(m((this.x+8)/32),m((this.y-23)/16))||_(m((this.x-8)/32),m((this.y-16)/16))||_(m((this.x+8)/32),m((this.y-16)/16))}updateCacheBrickOnHead(){this.cacheBrickOnHead=_(m((this.x-9)/32),m((this.y-25)/16))&&!_(m((this.x-9)/32),m((this.y-23)/16))||_(m((this.x+9)/32),m((this.y-25)/16))&&!_(m((this.x+9)/32),m((this.y-23)/16))||_(m((this.x-9)/32),m((this.y-24)/16))&&!_(m((this.x-9)/32),m((this.y-8)/16))||_(m((this.x+9)/32),m((this.y-24)/16))&&!_(m((this.x+9)/32),m((this.y-8)/16))}isOnGround(){return this.cacheOnGround}isBrickOnHead(){return this.cacheBrickOnHead}isBrickCrouchOnHead(){return this.cacheBrickCrouchOnHead}}var w=a(1),v=a.n(w);class A{constructor(e,t){this.player=t,this.playerGraphics=new v.a.Graphics,this.playerGraphics.beginFill(11184895),this.playerGraphics.drawRect(0,0,20,3*i.BRICK_HEIGHT),this.playerGraphics.endFill(),e.addChild(this.playerGraphics),this.playerCenter=new v.a.Graphics,this.playerCenter.beginFill(170),this.playerCenter.drawRect(0,0,2,2),this.playerCenter.endFill(),e.addChild(this.playerCenter),this.playerName=new v.a.Text(t.name,{fontFamily:"Arial",fontSize:14,fill:"white",align:"center"}),this.playerName.anchor=new v.a.Point(.5,.5),this.playerName.height=80,this.playerName.scale.x=this.playerName.scale.y,e.addChild(this.playerName),this.playerHA=new v.a.Text("0 / 0",{fontFamily:"Arial",fontSize:14,fill:"white",align:"center"}),this.playerHA.anchor=new v.a.Point(.5,.5),this.playerHA.height=70,this.playerHA.scale.x=this.playerName.scale.y,e.addChild(this.playerHA);var a=new v.a.Graphics;e.addChild(a);var s=new v.a.Graphics;e.addChild(s),this.initHeight=this.playerGraphics.height}adjustPosition(e,t){this.playerGraphics.x=e-10,this.player.crouch?(this.playerGraphics.y=t-8,this.playerGraphics.height=this.initHeight/3*2):(this.playerGraphics.y=t-24,this.playerGraphics.height=this.initHeight),this.playerCenter.x=e-1,this.playerCenter.y=t-1,this.playerName.x=e,this.playerName.y=this.playerGraphics.y-25,this.playerHA.x=e,this.playerHA.y=this.playerGraphics.y-9,this.playerHA.setText(this.player.health+" / "+this.player.armor)}updatePlayerHA(e,t,a){}}var f=a(0),T=a.n(f),g={fire_bfg:new T.a({urls:["sounds/bfg_fire.wav"]}),fire_plasma:new T.a({urls:["sounds/plasma.wav"]}),fire_gren:new T.a({urls:["sounds/grenade.wav"]}),fire_rail:new T.a({urls:["sounds/rail.wav"]}),fire_shaft:new T.a({urls:["sounds/flight.wav"]}),fire_shaft_begin:new T.a({urls:["sounds/lg_start.wav"]}),fire_shaft_end:new T.a({urls:["sounds/lg_hum.wav"]}),fire_shotgun:new T.a({urls:["sounds/shotgun.wav"]}),fire_mach:new T.a({urls:["sounds/machine.wav"]}),fire_rocket:new T.a({urls:["sounds/rocket.wav"]}),powerup_invis:new T.a({urls:["sounds/invisibility.wav"]}),powerup_haste:new T.a({urls:["sounds/haste.wav"]}),powerup_quad:new T.a({urls:["sounds/quaddamage.wav"]}),powerup_hold:new T.a({urls:["sounds/holdable.wav"]}),powerup_regen:new T.a({urls:["sounds/regeneration.wav"]}),flagtk:new T.a({urls:["sounds/flagtk.wav"]}),flagret:new T.a({urls:["sounds/flagret.wav"]}),flagcap:new T.a({urls:["sounds/flagcap.wav"]}),jump:new T.a({urls:["sounds/sarge/jump1.wav"]}),death1:new T.a({urls:["sounds/sarge/death1.wav"]}),death2:new T.a({urls:["sounds/sarge/death2.wav"]}),death3:new T.a({urls:["sounds/sarge/death3.wav"]}),jumppad:new T.a({urls:["sounds/jumppad.wav"]}),respawn:new T.a({urls:["sounds/respawn.wav"]}),lava:new T.a({urls:["sounds/lava.wav"]}),powerup:new T.a({urls:["sounds/poweruprespawn.wav"]}),flight:new T.a({urls:["sounds/flight.wav"]}),noammo:new T.a({urls:["sounds/noammo.wav"]}),genericdata:new T.a({urls:["sounds/hit.wav"]}),genericstatdata:new T.a({urls:["sounds/gameend.wav"]})},C={constructor(){this.volume=1},play(e){g[e].volume(this.volume),g[e].play()},updateVolume(e){this.volume=e}};const R=i.PLAYER_MAX_VELOCITY_X;var N=D.isBrick,S=y.trunc,P=0,k=document.getElementById("log"),x="";class b{constructor(e){this.player=e,this.defx=0,this.defy=0,this.tmpCol=0,this.tmpY=0,this.tmpSpeedX=0,this.tmpAbsMaxVelocityX=0,this.tmpSign=0,this.velocityYSpeedJump=[0,0,.4,.8,1,1.2,1.4],this.velocityXSpeedJump=[0,.33,.8,1.1,1.4,1.8,2.2],this.tmpLastWasJump=!1,this.tmpCurJump=!1,this.speedJumpDirection=0,this.tmpLastKeyUp=!1,this.tmpDjBonus=0}playerphysic(e){this.defx=this.player.x,this.defy=this.player.y,this.player.velocityY=this.player.velocityY+.056,this.player.velocityY>-1&&this.player.velocityY<0&&(this.player.velocityY/=1.11),this.player.velocityY>0&&this.player.velocityY<5&&(this.player.velocityY*=1.1),this.player.velocityX<-.2||this.player.velocityX>.2?this.player.keyLeft===this.player.keyRight&&(this.player.isOnGround()?this.player.velocityX/=1.14:this.player.velocityX/=1.025):this.player.velocityX=0,0!==this.player.velocityX?this.tmpSpeedX=(this.player.velocityX<0?-1:1)*this.velocityXSpeedJump[this.player.speedJump]:this.tmpSpeedX=0,this.player.setXY(this.player.x+this.player.velocityX+this.tmpSpeedX,this.player.y+this.player.velocityY),this.player.crouch&&(this.player.isOnGround()&&(this.player.isBrickCrouchOnHead()||this.player.velocityY>0)?(this.player.velocityY=0,this.player.setY(16*S(Math.round(this.player.y)/16)+8)):this.player.isBrickCrouchOnHead()&&this.player.velocityY<0&&(this.player.velocityY=0,this.player.doublejumpCountdown=3,this.player.setY(16*S(Math.round(this.player.y)/16)+8))),0!=this.player.velocityX&&(this.tmpCol=S(Math.round(this.defx+(this.player.velocityX<0?-11:11))/32),this.tmpY=this.player.crouch?this.player.y:this.defy,(N(this.tmpCol,S(Math.round(this.tmpY-(this.player.crouch?8:16))/16))||N(this.tmpCol,S(Math.round(this.tmpY)/16))||N(this.tmpCol,S(Math.round(this.tmpY+16)/16)))&&(this.player.setX(32*S(this.defx/32)+(this.player.velocityX<0?9:22)),this.player.velocityX=0,this.player.speedJump=0,this.defx!=this.player.x&&this.log("wall",this.player))),this.player.isOnGround()&&(this.player.isBrickOnHead()||this.player.velocityY>0)?(this.player.velocityY=0,this.player.setY(16*S(Math.round(this.player.y)/16)+8)):e.isBrickOnHead()&&this.player.velocityY<0&&(this.player.velocityY=0,this.player.doublejumpCountdown=3),this.player.velocityX<-5&&(this.player.velocityX=-5),this.player.velocityX>5&&(this.player.velocityX=5),this.player.velocityY<-5&&(this.player.velocityY=-5),this.player.velocityY>5&&(this.player.velocityY=5)}playermove(){if(this.playerphysic(this.player),this.player.doublejumpCountdown>0&&this.player.doublejumpCountdown--,this.player.isOnGround()&&(this.player.velocityY=0),this.tmpCurJump=!1,this.player.speedJump>0&&(this.player.keyUp!==this.tmpLastKeyUp||this.player.keyLeft&&-1!==this.speedJumpDirection||this.player.keyRight&&1!==this.speedJumpDirection)&&(this.player.speedJump=0,this.log("sj 0 - change keys",this.player)),this.tmpLastKeyUp=this.player.keyUp,this.player.keyUp?!this.player.isOnGround()||this.player.isBrickOnHead()||this.tmpLastWasJump||(this.player.doublejumpCountdown>4&&this.player.doublejumpCountdown<11?(this.player.doublejumpCountdown=14,this.player.velocityY=-3,0!==this.player.velocityX?this.tmpSpeedX=Math.abs(this.player.velocityX)+this.velocityXSpeedJump[this.player.speedJump]:this.tmpSpeedX=0,this.tmpSpeedX>3?(this.tmpDjBonus=this.tmpSpeedX-3,this.player.velocityY-=this.tmpDjBonus,this.log("dj higher (bonus +"+this.round(this.tmpDjBonus)+")",this.player)):this.log("dj standart",this.player),this.player.crouch=!1,C.jump()):(0===this.player.doublejumpCountdown&&(this.player.doublejumpCountdown=14,C.jump()),this.player.velocityY=-2.9,this.player.velocityY+=this.velocityYSpeedJump[this.player.speedJump],this.log("jump",player),this.player.speedJump<6&&!this.tmpLastWasJump&&this.player.keyLeft!==this.player.keyRight&&(this.speedJumpDirection=this.player.keyLeft?-1:1,this.player.speedJump++,this.log("increase sj",this.player))),this.tmpCurJump=!0):this.player.isOnGround()&&this.player.speedJump>0&&!this.player.keyDown&&(this.player.speedJump=0,this.log("sj 0 - on ground",this.player)),!this.player.keyUp&&this.player.keyDown?this.player.isOnGround()?this.player.crouch=!0:this.player.isBrickCrouchOnHead()||(this.player.crouch=!1):this.player.crouch=this.player.isOnGround()&&this.player.isBrickCrouchOnHead(),this.tmpLastWasJump=this.tmpCurJump,this.player.keyLeft!==this.player.keyRight){this.tmpAbsMaxVelocityX=R,this.player.crouch&&this.tmpAbsMaxVelocityX--,this.tmpSign=this.player.keyLeft?-1:1,this.player.velocityX*this.tmpSign<0&&(this.player.velocityX+=.8*this.tmpSign);var e=Math.abs(this.player.velocityX);e<this.tmpAbsMaxVelocityX?this.player.velocityX+=.35*this.tmpSign:e>this.tmpAbsMaxVelocityX&&(this.player.velocityX=this.tmpSign*this.tmpAbsMaxVelocityX)}}log(e){P++,0!==this.player.velocityX?this.tmpSpeedX=(this.player.velocityX<0?-1:1)*this.velocityXSpeedJump[pthis.layer.speedJump]:this.tmpSpeedX=0,x=P+" "+e+" (x: "+this.round(this.player.x)+", y: "+this.round(this.player.y)+", dx: "+this.round(this.tmpSpeedX)+", dy: "+this.round(this.player.velocityY)+", sj: "+this.player.speedJump+")",k.value=x+"\n"+k.value.substring(0,1e3),o.writeText(x)}round(e){return S(e)+"."+Math.abs(S(10*e)-10*S(e))}}function L(e){e.physics.playermove()}var G=0,F=0;function I(e,t){if(0===G&&(G=t-16),0===(F=S((t-G)/16)))return!1;if(G+=16.6*F,1===F)L(e);else for(;F>0;)L(e),F--}var H=v.a.autoDetectRenderer(window.innerWidth,window.innerHeight);H.view.style.display="block",document.getElementById("game").appendChild(H.view);var X=new v.a.Stage(0),U=new v.a.Graphics;U.beginFill(10066329),U.lineStyle(1,11184810),X.addChild(U);var Y=!1,B=0,V=0,J=0,j=0;function W(){H.view.width=window.innerWidth-20,H.view.height=window.innerHeight,(Y=D.getRows()>window.innerHeight/16||D.getCols()>(window.innerWidth-20)/32)?(B=Math.floor((window.innerWidth-20)/2),V=Math.floor(window.innerHeight/2)):(U.x=J=Math.floor((window.innerWidth-20-32*D.getCols())/2),U.y=j=Math.floor((window.innerHeight-16*D.getRows())/2))}window.addEventListener("resize",W,!1);var K=0,q=0;var z=a(2);var Q=new(a.n(z).a);document.getElementById("fps").appendChild(Q.domElement);var Z=1,$=[];C.updateVolume(.3),(new class{constructor(){this.players=[],this.data={},this.frameId=0}loadFromQuery(e){var t=window.location.href.slice(window.location.href.indexOf("?")+1);if(0===t.indexOf("demourl=")){var a=decodeURIComponent(t.substring(8)).replace(/\+/g," ");a="http://nfk.harpywar.com:8080/demo?url="+a+"&full=true",o.writeText("demo loaded from url"),this.load(a,e)}}load(e,t){var a=this;this._loadJSON(e,function(e){a.data=e,a._loadPlayers(),t(a)},function(e){console.error(e)})}_loadPlayers(){for(var e=0;e<this.data.Players.length;e++){var t=new M(this.data.Players[e].PlayerInfo.DXID,this.data.Players[e].RealName);0==e&&(t.follow=!0),this.players.push(t)}console.log("loaded "+this.players.length+" players from demo")}nextFrame(e){var t=this.data.DemoUnits[this.frameId++],a=t.DemoUnit;switch(t.DData.type0){case i.DDEMO_PLAYERPOSV3:for(var s=0;s<this.players.length;s++)a.DXID==this.players[s].DXID&&(this.players[s].x=a.x,this.players[s].y=a.y,this.players[s].velocityX=a.inertiax,this.players[s].velocityY=a.inertiay);break;case i.DDEMO_HAUPDATE:for(s=0;s<this.players.length;s++)a.DXID==this.players[s].DXID&&(this.players[s].health=a.health,this.players[s].armor=a.armor,a.health<=0&&C.play("death"+(y.random(3)+1)));break;case i.DDEMO_CTF_EVENT_FLAGPICKUP:case i.DDEMO_CTF_EVENT_FLAGTAKEN:C.play("flagtk");break;case i.DDEMO_CTF_EVENT_FLAGRETURN:C.play("flagret");break;case i.DDEMO_CTF_EVENT_FLAGCAPTURE:C.play("flagcap");break;case i.DDEMO_EARNPOWERUP:0==a.type1&&C.play("powerup_regen"),1==a.type1&&C.play("powerup_hold"),2==a.type1&&C.play("powerup_haste"),3==a.type1&&C.play("powerup_quad"),4==a.type1&&C.play("powerup_invis");break;case i.DDEMO_KILLOBJECT:break;case i.DDEMO_FIREBFG:C.play("fire_bfg");break;case i.DDEMO_FIREPLASMAV2:case i.DDEMO_FIREPLASMA:C.play("fire_plasma");break;case i.DDEMO_FIREGRENV2:case i.DDEMO_FIREGREN:C.play("fire_gren");break;case i.DDEMO_FIRERAIL:C.play("fire_rail");break;case i.DDEMO_FIRESHAFT:C.play("fire_shaft");break;case i.DDEMO_NEW_SHAFTBEGIN:C.play("fire_shaft_begin");break;case i.DDEMO_NEW_SHAFTEND:C.play("fire_shaft_end");break;case i.DDEMO_FIRESHOTGUN:C.play("fire_shotgun");break;case i.DDEMO_FIREMACH:C.play("fire_mach");break;case i.DDEMO_FIREROCKET:C.play("fire_rocket");break;case i.DDEMO_JUMPSOUND:C.play("jump");break;case i.DDEMO_JUMPPADSOUND:C.play("jumppad");break;case i.DDEMO_RESPAWNSOUND:C.play("respawn");break;case i.DDEMO_LAVASOUND:C.play("lava");break;case i.DDEMO_POWERUPSOUND:C.play("powerup");break;case i.DDEMO_FLIGHTSOUND:C.play("flight");break;case i.DDEMO_NOAMMOSOUND:C.play("noammo");break;case i.DDEMO_GENERICSOUNDDATA:break;case i.DDEMO_GENERICSOUNDSTATDATA:C.play("genericstatdata")}}_loadJSON(e,t,a){var i=new XMLHttpRequest;i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?t&&t(JSON.parse(i.responseText)):a&&a(i))},i.open("GET",e,!0),i.send()}}).loadFromQuery(function(e){$=e.players,D.loadNFKMap(e.data.Map.Bricks),function(){var e,t,a=D.getRows(),i=D.getCols();for(e=0;e<a;e++)for(t=0;t<i;t++)D.isBrick(t,e)&&U.drawRect(32*t,16*e,31,15);H.render(X),W()}(),function(e){for(var t=0;t<e.length;t++)e[t].graphics=new A(X,e[t]),e[t].physics=new b(e[t])}($);var t=0;requestAnimationFrame(function a(i){Q.begin();for(var s=0;s<$.length;s++)I($[s],i),r=$[s],K=r.x+J,q=r.y+j,Y&&r.follow&&(J=U.x=B-r.x,j=U.y=V-r.y),r.graphics.adjustPosition(K,q),H.render(X);var r;for(var s=0;s<Z;s++)e.nextFrame(t);++t>60&&(t=0);requestAnimationFrame(a);Q.end()})}),console.log("prs loaded")}]);
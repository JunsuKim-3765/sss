class Game {
  constructor() {
   this.leftKeyActive = false;
   this.playerMoving = false;
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {

    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    if(gameType==="SinglePlayer" && player.name===1){
      soldier2=createSprite(500,500);
      soldier2.addAnimation("soldier",soldier2Img);
      soldier2.scale = 0.9;
    }
    
    if(gameType==="SinglePlayer" && player.name===2){
      woodcutter2=createSprite(500,500);
      woodcutter2.addAnimation("woodcutter",woodcutter2Img);
      woodcutter2.scale = 0.9;
    }

    if(gameType==='Singleplayer'&&player.name===3){
      fisherman2=createSprite(500,500);
      fisherman2.addAnimation('fisherman',fisherman2Img);
      fisherman2.scale = 0.9;
    }
  }

  startTwo(){
    

  }

  playOne(){
    form.hide();

    Player.getPlayersInfo();

    if(allPlayers != undefined ){
      imageMode(CENTER);
      image(trackImage,width/2,height/2,width-10,height-20);
      for(var plr in allPlayers){
        this.spawnZombies();
      }
      
    }
  }

  playTwo(){
    form.hide();

    player.getPlayersInfo();

    if(allPlayers != undefined){
      imageMode(CENTER);
      image(trackImage,width/2,height/2,width-10,height-20);
    }
  }

  spawnPlayers(){
    if(player.name === 1){

    }
  }

  spawnZombies(){
    zombie = createSprite(Math.round(random(width/3-100,width-100)),height/3-200,50,50);
    zombie.addImage('zombie',zombieImage);
    zombie.scale = 0.8;


  }

}

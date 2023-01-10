
class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 100;
    this.x = 20;
    this.y = 100;
    this.speedY = 0;
    this.maxSpeed = 5;
    this.projectiles = [];  
    this.color = "grey";
    this.collisionTimer = 0;
    this.collisionInterval = 100;
    this.countblink = 50;
    this.isBlink = false;
    this.startBlink = false;
    this.maxSpeedX =5;
    this.speedX = 0;
  }

  update(deltaTime) {
 
    if (this.game.keys.includes("ArrowUp")){ this.speedY = -this.maxSpeed;   }
    else if (this.game.keys.includes("ArrowDown")){ this.speedY = this.maxSpeed;  }
    else this.speedY = 0;
    this.y += this.speedY;

    if (this.game.keys.includes("ArrowLeft")){ console.log("hello");this.speedX = -this.maxSpeedX;   }
    else if (this.game.keys.includes("ArrowRight")){ this.speedX = this.maxSpeedX;  }
    else this.speedX = 0;

    this.x+= this.speedX;
    
    //handle projectiles
    this.projectiles.forEach((projectile) => {
      projectile.update();
    });
    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletetion
    );

      this.blink(deltaTime);
  }

  blink(deltaTime){
    if( !this.startBlink) return;
    if(this.countblink <= 0 ){
      this.startBlink  = false;
      this.countblink = 10;
    }
    this.collisionTimer += deltaTime;
    if(this.collisionTimer >= this.collisionInterval ){
      this.collisionTimer = 0;
      this.isBlink = this.isBlink == true? false: true;
      this.countblink--;

    }
  }

  draw(context) {
    Draw.drawRectFill(context, this.x, this.y, this.width, this.height,this.color);
    if( this.isBlink)
    {

       Draw.drawRectFill(context, this.x, this.y, this.width, this.height,"white"); 
    }
   
    this.projectiles.forEach((projectile) => {
      projectile.draw(context);
    });
  }



  shootTop(tp) {
    
    var x =this.x+this.width/2
    var y=this.y+this.height/2;
    var power = 1;
    var w = 2;
    var h = 2;
    var color = "green"
    var NoUpdate = false;
        if(tp == "lazer")
        {
          w = 500;
          h = 40;
            x =this.x ;
            y=this.y +this.height/2 - h/2;
            power = 1000;
        
            color = "white"
            NoUpdate = true;

            this.projectiles.push( new Projectile(this.game,x,y,power,w,h,color,NoUpdate));
            return;
            
        }
        else if (tp == "double"){
           h = 20;
            x =this.x+50;
            y=this.y+50;
            power = 6;
            w = 20;
            var between = 
           
            color = "yellow"
            NoUpdate = false;

            this.projectiles.push( new Projectile(this.game,x,y,power,w,h,color,NoUpdate));
            this.projectiles.push( new Projectile(this.game,x,y+100,power,w,h,color,NoUpdate));
            return;
         
        }

        this.projectiles.push( new Projectile(this.game,x, y, 1,5,5,"green",false));
        return;
  }
}


class Projectile{
    /***
     * game,x,y,power,width,height, color, NoUpdate
     * 
     */
    constructor(game,x,y,power,w,h,color,NoUpdate) { 
        this.game = game;
        this.color = color
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = 10;
        this.score = 1;
        this.power = power;
        this.markedForDeletetion = false;
        this.NoUpdate = NoUpdate;
        this.countToRemove = 0;
    }

    update(deltaTime){  

  
       if( this.NoUpdate) {
        this.countToRemove++;
        if(this.countToRemove == 10){
             this.markedForDeletetion=true ;
      
        }
        return;
       }
       this.x += this.speed;
       if(this.x > this.game.width * 0.95) this.markedForDeletetion=true;
    }  

    draw(context){ 
        Draw.drawRectFill(context,this.x, this.y, this.width,this.height,this.color); 
    }
}
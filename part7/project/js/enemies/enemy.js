class Enemy{
    constructor(game){
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markForDeletion = false;
        this.color = "red";
        this.live = 0;
        this.remainLive= 0;
    }

    update(deltaTime){
   
        this.x += this.speedX;
        if(this.x + this.width < 0) this.markForDeletion = true;
    }

    drawLive(context){
        var pc = (this.remainLive * 100)/this.live;
       
        Text.txt(context,this.x+5, this.y,20,pc.toFixed(0)+"%","black");
    }
    draw(context){
        this.drawLive(context)
        Draw.drawRectFill(context, this.x, this.y, this.width, this.height,this.color); 
    }
}

 
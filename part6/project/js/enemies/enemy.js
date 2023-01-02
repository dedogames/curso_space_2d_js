class Enemy{
    constructor(game){
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markForDeletion = false;
        this.color = "red";
    }

    update(deltaTime){
        this.x += this.speedX;
        if(this.x + this.width < 0) this.markForDeletion = true;
    }

    draw(context){
        Draw.drawRectFill(context, this.x, this.y, this.width, this.height,this.color); 
    }
}
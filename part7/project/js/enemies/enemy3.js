class Enemy3 extends Enemy{
    constructor(game){
        super(game);
        this.width = 30;
        this.height = 30;
        this.color = "yellow";
        this.radius = 100;
        this.live = 300;
        this.remainLive = this.live;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.x -= -120;
    }

    update(deltaTime){
        super.update(deltaTime);

    }

    draw(context){
       
        Draw.drawCircleFill(context,this.x, this.y,  this.radius ,this.color); 
        this.drawLive(context);
    }
}
class Enemy2 extends Enemy{
    constructor(game){
        super(game);
        this.width = 50;
        this.height = 50;
        this.color = "yellow";
        this.live = 5;
        this.remainLive = this.live;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }

    update(deltaTime){
        super.update(deltaTime);
    }

    draw(context){
        super.draw(context);
    }
}
class Enemy1 extends Enemy{
    constructor(game){
        super(game);
        this.width = 70;
        this.height = 70;
        this.color = "purple";
        this.live = 10;
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
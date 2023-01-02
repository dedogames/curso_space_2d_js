class Enemy1 extends Enemy{
    constructor(game){
        super(game);
        this.width = 100;
        this.height = 50;
        this.color = "purple";
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }

    update(deltaTime){
        super.update(deltaTime);
    }

    draw(context){
        super.draw(context);
    }
}
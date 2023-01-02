class Enemy2 extends Enemy{
    constructor(game){
        super(game);
        this.width = 30;
        this.height = 30;
        this.color = "yellow";
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }

    update(deltaTime){
        super.update(deltaTime);
    }

    draw(context){
        super.draw(context);
    }
}
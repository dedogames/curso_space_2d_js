class Game{
    constructor(width,height){
        this.width = width;
        this.height = height; 
        this.keys = []
        this.input = new InputHandler(this);
        this.player = new Player(this);
 
    }

    update(deltaTime){ 
 
        this.player.update(deltaTime);
    }

    draw(context){
        this.player.draw(context);
    }

}
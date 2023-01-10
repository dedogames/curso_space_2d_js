class Layer{
    constructor(id,game,image,speedModifier,position,blur){
        this.game = game;
        this.id = id;
        this.image = image;
        this.speedModifier = speedModifier;
        this.scale = 1;
        this.size = new Vec2d(image.width*this.scale,image.height*this.scale);
        this.position = position;
        this.blur = blur;
    }

    update(deltaTime){
        if(this.position.x <= -this.size.x ) this.position.x = 0;
        this.position.x -= this.speedModifier;
    }

    draw(context){
        context.save();
        context.filter = 'blur('+this.blur+'px)';
        context.drawImage(this.image, this.position.x, this.position.y,this.size.x, this.size.y );
        context.drawImage(this.image, this.position.x+this.size.x , this.position.y,this.size.x, this.size.y ); 
        context.restore();
    }
}
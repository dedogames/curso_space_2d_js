
class Background{
    constructor(game){
        this.game = game;
        this.image1 = document.getElementById('layer1');
        this.image2 = document.getElementById('layer2');
        this.image3 = document.getElementById('layer3');
        this.image4 = document.getElementById('layer5');
        this.image5 = document.getElementById('layer4');
       
        
        this.layer1 = new Layer("layer1",this.game, this.image1,0.0,new Vec2d(0,0) ,0  );
        this.layer2 = new Layer("layer2",this.game, this.image2,0.5 ,new Vec2d(0,0)  ,0  );
        this.layer3 = new Layer("layer3",this.game, this.image3,1.4 , new Vec2d(0,0)  ,3);
        
        this.layer5 = new Layer("layer4",this.game, this.image5,8.7 ,new Vec2d(0,230)  ,4);
        this.layer4 = new Layer("layer5",this.game, this.image4,5.9 ,new Vec2d(0,0) ,8 );
        this.layers = [this.layer1,this.layer2,this.layer4,this.layer5 ];
    }

    update(deltaTime){
        this.layers.forEach(layer => layer.update(deltaTime));
    }

    draw(context){
        this.layers.forEach(layer => layer.draw(context));
    }
}
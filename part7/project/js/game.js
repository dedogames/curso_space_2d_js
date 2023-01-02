class Game{
    constructor(width,height){
        this.width = width;
        this.height = height; 
        this.keys = [];
        this.enemyTimer = 0;
        this.enemyInterval = 2000;
        this.input = new InputHandler(this);
        this.player = new Player(this);
        this.enemies = [];
 
    }

    addEnemy(){

      
        switch(Utils.randomInteger(1,3))
        {
        
            case 1:
                this.enemies.push(new Enemy1(this) );
            break;

            case 2:
                this.enemies.push(new Enemy2(this) );
                break;
            case 3: 
            this.enemies.push(new Enemy3(this) );
            break;
        }
    }

    update(deltaTime){ 
 
        this.player.update(deltaTime);
        this.enemies.forEach(enemy => {
            enemy.update(deltaTime);
            if( !this.player.startBlink){
                if(this.checkCollision(this.player,enemy)){
                    enemy.markedForDeletion = true;
                  
                    this.player.startBlink = true;
                }
            }

            this.player.projectiles.forEach(projetil => {
                if(this.checkCollision(projetil,enemy)){

                    enemy.remainLive -= projetil.power;
                    projetil.markedForDeletetion = true;
                    if(enemy.remainLive <= 0){
                        enemy.markedForDeletion = true;
                    }
                  
                }
            });
         
        });

        this.enemies = this.enemies.filter(enemy => ! enemy.markedForDeletion);

        if( this.enemyTimer > this.enemyInterval ){
            this.addEnemy();
            this.enemyTimer = 0;
        }else{
            this.enemyTimer += deltaTime;
        }
        
    }

     checkCollision(r1, r2){
        var radius = r2.radius || 0;
        return (
                r1.x < r2.x + r2.width+radius &&
                r1.x + (r1.width+radius ) > r2.x && 
                r1.y < r2.y + r2.height+radius &&
                r1.height+radius + r1.y > r2.y
        );
    }
    draw(context){
   

        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });

        this.player.draw(context);
       
    }

}
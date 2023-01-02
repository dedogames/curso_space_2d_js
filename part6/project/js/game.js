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
        });
        this.enemies = this.enemies.filter(enemy => ! enemy.markedForDeletion);

        if( this.enemyTimer > this.enemyInterval ){
            this.addEnemy();
            this.enemyTimer = 0;
        }else{
            this.enemyTimer += deltaTime;
        }

        
    }

    draw(context){
   

        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });

        this.player.draw(context);
       
    }

}
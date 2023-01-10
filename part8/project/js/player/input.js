class InputHandler{
    constructor(game){
        this.game = game;
 
        window.addEventListener('keydown',key_event => {
            if( ((key_event.key === 'ArrowUp') ||
             (key_event.key === 'ArrowDown') ||
             (key_event.key === 'ArrowLeft') ||
             (key_event.key === 'ArrowRight') 
             ) 
            && this.game.keys.indexOf(key_event.key) === -1){
                this.game.keys.push(key_event.key);
                return
            } else if (key_event.key === ' '){
                this.game.player.shootTop("")
                return;
            }
            else if (key_event.key === 'a'){
                this.game.player.shootTop("lazer")
                return;
            }
            else if (key_event.key === 'b'){
                this.game.player.shootTop("double")
                return;
            }
        });

        window.addEventListener('keyup',key_event => {
            if(this.game.keys.indexOf(key_event.key) > -1){
                this.currentKey  = null;
                this.game.keys.splice(this.game.keys.indexOf(key_event.key),1);
            } 
        });
    }
}
window.addEventListener("load", function () {
  //Incializa apenas após carregar toda a pagina

  let lasttime = 0; 
  const canvas = document.getElementById("main_canvas");
  const ctx = canvas.getContext("2d");
  var game = new Game(canvas.width, canvas.height);

  //Loop game
  function loop(timeStamp){
    const deltaTime = timeStamp - lasttime;
    lasttime = timeStamp;  
    
    ctx.clearRect(0,0,canvas.width,canvas.height);

    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(loop);
}

//Inicializando
loop(0);

});

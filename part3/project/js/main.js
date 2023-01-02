window.addEventListener("load", function () {
  //Incializa apenas após carregar toda a pagina

  let lasttime = 0;
  var game = null;
  const canvas = document.getElementById("main_canvas");
  const ctx = canvas.getContext("2d");

  Log.warn("Log warning!");
  Log.error("main.js","Log Error!");
  Log.info("Log Info!");


 var posX = 70;
 var posY = 50;
  Draw.drawRect(ctx,50+posX,50+posY,50,50,"black"); 
  Draw.drawRectFill(ctx,150+posX,50+posY,50,50,"white"); 

  Draw.drawCircle(ctx,75+posX,130+posY,20,"red"); 
  Draw.drawCircleFill(ctx,180+posX,180+posY,50,"green"); 

  Text.txt(ctx,160+posX,350+posY,50,"Hello World!","white");
  Text.txt(ctx,160+posX,400+posY,22,"Comic Sans MS!","red");

});

class Game{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.shapedsPosX = 70;
        this.shapedsPosY= 50;

        this.shapedsCirclePosX = Utils.randomInteger(50,300);
        this.shapedsCirclePosY= Utils.randomInteger(50,300);
        this.speed = Utils.randomNumber(0.2, 0.7); 
        this.directionX = 1;
        this.directionY = 1;
        this.p1 =[0,0];//left top
        this.p2 = [this.width-10,0];//right top
        this.p3 = [0,this.height-10];//right bottom
        this.p4 = [this.width-10,this.height-10]//left bottom
        this.radius = 20;
    }

    update(deltaTime){ 
        if(this.shapedsCirclePosX-this.radius <= (this.p1[0]  ) || (this.shapedsCirclePosX+ this.radius/2) >= (this.p2[0] ))
            this.directionX *= -1;

      if(this.shapedsCirclePosY-this.radius <= (this.p1[1]  ) || (this.shapedsCirclePosY+this.radius/2) >= (this.p3[1] ))
            this.directionY *= -1;

      this.shapedsCirclePosX += this.speed*this.directionX*deltaTime;
      this.shapedsCirclePosY += this.speed*this.directionY*deltaTime;
      
    }

    draw(context){
  

        Draw.drawRectFill(context,this.p1[0],this.p1[1],10,10,"black"); 
        Draw.drawRectFill(context,this.p2[0],this.p2[1],10,10,"black"); 
        Draw.drawRectFill(context,this.p3[0],this.p3[1],10,10,"black"); 
        Draw.drawRectFill(context,this.p4[0],this.p4[1],10,10,"black"); 


         Draw.drawRect(context,50+this.shapedsPosX,50+this.shapedsPosY,50,50,"black"); 
         Draw.drawRectFill(context,150+this.shapedsPosX,50+this.shapedsPosY,50,50,"white"); 
       
         Draw.drawCircleFill(context,this.shapedsCirclePosX,this.shapedsCirclePosY, this.radius ,"red"); 
         Draw.drawCircleFill(context,180+this.shapedsPosX,180+this.shapedsPosY,50,"green"); 
       
         Text.txt(context,160+this.shapedsPosX,350+this.shapedsPosY,50,"Hello World!","white");
     
        
         Text.txt(context,168+this.shapedsPosX,400+this.shapedsPosY,15,    this.shapedsCirclePosX.toFixed(2));
         Text.txt(context,235+this.shapedsPosX,400+this.shapedsPosY,15,    this.shapedsCirclePosY.toFixed(2));
         Text.txt(context,160+this.shapedsPosX,400+this.shapedsPosY,22,"Position:[         ,         ]");

    }

}
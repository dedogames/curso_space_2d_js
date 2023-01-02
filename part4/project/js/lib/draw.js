class Draw{
    static drawRect(context, x, y, w,h,color,lineWidth) {
        context.lineWidth = lineWidth;
        context.strokeStyle =  color;
        context.strokeRect(x,y,w,h); 
      }
      static drawCircle(context,x,y,radius,color,lineWidth) {
    
        context.beginPath();
        context.strokeStyle =  color;
        context.lineWidth = lineWidth;
        context.arc(x,y,radius, 0, 2 * Math.PI);
        context.closePath()
        context.stroke();
      }
    
      static drawCircleFill(context,x,y,radius,color,lineWidth) {
        context.lineWidth = lineWidth;
        context.fillStyle = color;
        context.beginPath();
        context.arc(x,y,radius, 0, 2 * Math.PI);
        context.fill();
      }
    
      static drawRectFill(context, x, y, w,h,color,lineWidth) {
        context.lineWidth = lineWidth;
        context.fillStyle = color;
        context.fillRect(x,y,w,h);
      }
      
}
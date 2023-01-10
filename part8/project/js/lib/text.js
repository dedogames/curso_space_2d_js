class Text{
    static FONT1 = "px Comic Sans MS";

    static txt(context,x,y,size,string,color,font,textAlign){
        if(!font)
            font = Text.FONT1;
        
        context.font =size+font;
        context.fillStyle = color;
        
        if(!textAlign)
          textAlign = "center";
        context.textAlign = textAlign;
        context.fillText(string,x,y);
    }
}
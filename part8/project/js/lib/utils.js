class Utils{


static randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
  
  static randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

}
class Log{

    static transports = [console.log];
    
    static getDateTime(){
        return  "["+ new Date().toISOString()+"]  ";
    }
    static warn(message){
        var time = Log.getDateTime();
        var type = "WARN";

        Log.transports[0](time +   type + " | "+ message);
    }

    static error(from,err){
        var time = Log.getDateTime();
        var type = "ERROR";

        Log.transports[0](time + type + " | "+ from+ " | "+ err);
    }

    static info(message){
        var time = Log.getDateTime();
        var type = "INFO";

        Log.transports[0](time +   type + " | "+  message);
    }
}
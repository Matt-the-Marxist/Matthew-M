public class fahrenheitToCelsius{


    public static void main(String[] args){
        run();
    }

    public static void run(){
        System.out.println(fToC(32.0));
        System.out.println(fToC(212.0));
    }
    
    /**
     * converts fahrenheit to Celsius
     * 
     * @param degrees temperature in f as double
     * @return temperature in C as double
     */
    public static double fToC(double degrees)
    {
       return(5*(degrees-32)/9); 
    }
}
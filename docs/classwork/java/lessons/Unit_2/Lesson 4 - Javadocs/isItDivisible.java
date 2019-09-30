public class isItDivisible{

    public static void main(String[] args){
        run();
    }

    public static void run(){
        for(int i=0;i<=5;i++){
            System.out.println(isDivisible(10,i));
        }
    }

    /**
    * returns if num is divisible by dividend
    * 
    * @param dividend int to be divided
    * @param divisor int to be divided by
    * @return if divisible
    */
    public static boolean isDivisible(int dividend, int divisor)
    {
        if(divisor==0){return false;}
        return(((int)((float)dividend/(float)divisor))==((float)dividend/(float)divisor));
    }
}




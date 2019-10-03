public class bintch{


    public static void main(String[] args) {
        run();
    }

    public static void run(){
        System.out.println(sumString(6, 10));
    }

    /**
     * returns an equation string such as "a+b=sum(a+b)"
     * 
     * @param one the first number 
     * @param two the second number
     * @return equation string such as "a + b = (a+b)"
     */
    public static String sumString(int one, int two)
    {
        return one + " + " + two + " = " + (one + two);
    }
}
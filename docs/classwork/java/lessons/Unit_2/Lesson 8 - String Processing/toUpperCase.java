public class ToUpperCase{
    public static void main(String[] args) {
        run();
    }

    public static void run(){
        System.out.println(toUpperCase("hello"));
    }

    /**
     * returns the provided string in all uppercase
     * 
     * @param str the given string
     * @return the string in all uppercase
     */
    public static String toUpperCase(String str)
    {
        return str.toUpperCase();
    }
}
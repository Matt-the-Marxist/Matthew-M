public class isInteger{
    public static void main(String[] args){
        run();
    }

    public static void run(){
        System.out.println(isInt("123"));
        System.out.println(isInt("12.3"));
        System.out.println(isInt("hello"));
        System.out.println(isInt("123a"));
    }

    /**
     * returns if a string is an integer
     * 
     * @param str the string to be evaluated
     * @return if contents of string is an int
     */
    public static boolean isInt(String str)
    {
        boolean end = true;
        for(int i=0;i<str.length();i++){
            if(!Character.isDigit(str.charAt(i))){
                end = false;
            }
        }
        return end;
    }
}
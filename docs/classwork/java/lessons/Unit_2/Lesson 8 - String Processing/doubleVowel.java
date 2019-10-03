public class DoubleVowel{


    public static void main(String[] args) {
        run();
    }
    public static void run(){
        System.out.println(doubleVowel("hello"));
    }
    
    /**
     * doubles all vowels in string
     * 
     * @param str the string for changing
     * @return the string but all the vowels are doubled
     */
    public static String doubleVowel(String str)
    {
        String end = "";
        for(int i=0; i<str.length(); i++){
            char test = str.charAt(i);
            end += test;
            if(isVowel(test)){
                end += test;
            }
        }
        return end;
    }

    /**
     * checks if char is a vowel
     * 
     * @param c char for testing
     * @return bool if c is vowel 
     */
    public static boolean isVowel(char c) {
        return "AEIOUaeiou".indexOf(c) != -1;
    }

}
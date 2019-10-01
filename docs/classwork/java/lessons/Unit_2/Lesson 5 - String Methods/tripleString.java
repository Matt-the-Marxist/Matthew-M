public class tripleString{

    public static void main(String[] args){
        run();
    }
    public static void run(){
        System.out.println(StringX3("GO"));
    }

    /**
     * repeats a string x3 with ! between each
     * 
     * @param word the string to be repeated
     * @return the string x3 with ! between each
     */
    public static String StringX3(String word){
        return word+"!"+word+"!"+word;
    }
}
public class repeatingStrings{

    public static void main(String[] args){
        run();
    }

    public static void run(){
        System.out.println(repeatString("hey",3));
    }

    /**
     * returns a string repeated a given number of times
     * 
     * @param text the string to be repeated
     * @param numReps the number of times to repeat
     */
    public static String repeatString(String text, int numReps)
    {
        String end = "";
        for(int i =0; i<numReps;i++){
            end = end + text;
        }
        return end;
    }
}
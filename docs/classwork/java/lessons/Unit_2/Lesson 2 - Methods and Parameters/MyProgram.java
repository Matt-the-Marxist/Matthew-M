public class MyProgram
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        printMessage("Hi", "Mack", 5);
    }
    
    public static void printMessage(String lineOne, String lineTwo, int numLines)
    {
        for(int i = 0; i<numLines;i++){
            if(i%2==0){
                System.out.println(lineOne);
            }else{
                System.out.println(lineTwo);
            }
        }
    }
}
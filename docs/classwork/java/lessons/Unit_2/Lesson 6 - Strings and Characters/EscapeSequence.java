public class EscapeSequence
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        // The \n adds a new line!
        String manyLines = "First Line\nSecond Line";
        System.out.println(manyLines);
        
        // To add sarcasm...
        String message = "Make sure to finish your \"homework\"";
        System.out.println(message);
    }
}
public class Multiply
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        multiply(2, 20);
        multiply(5, 19);
        multiply(100, 15);
        
    }
    
    private static void multiply(int a, int b)
    {
        System.out.println((a*b));
    }
}
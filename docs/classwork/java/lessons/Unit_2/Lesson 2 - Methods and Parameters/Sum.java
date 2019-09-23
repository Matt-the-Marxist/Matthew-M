public class Sum
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        sum(2, 2);
        sum(10, 400);
    }
    
    private static void sum(int a, int b)
    {
        int total = a + b;
        System.out.println(total);
    }
}